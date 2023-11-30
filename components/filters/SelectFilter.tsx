"use client";

import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

// Model for select filter, requires 3 params that is:
// term = the params string
// label = the autocomple label
// options = autocomplete options
export default function SelectFilter({
  term,
  label,
  options,
}: {
  term: string;
  label: string;
  options: Array<string>;
}) {
  const router = useRouter();
  const [select, setSelect] = useState("");
  const [query] = useDebounce(select, 1000);

  useEffect(() => {
    const currentQueryParams = new URLSearchParams(window.location.search);

    if (!query) {
      currentQueryParams.delete(`${term}`);
      router.push(`/?${currentQueryParams.toString()}`);
    } else {
      currentQueryParams.set(`${term}`, query);
      router.push(`/?${currentQueryParams.toString()}`);
    }
  }, [query]);

  return (
    <Autocomplete
      size="medium"
      value={select}
      inputValue={select}
      onInputChange={(event, newInputValue) => {
        setSelect(newInputValue);
      }}
      onChange={(event: any, newValue: string | null) => {
        setSelect(newValue || "");
      }}
      options={options}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
