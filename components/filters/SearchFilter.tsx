"use client";

import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

// Model for search filter, requires 3 params that is:
// term = the params string
// label = the input label
// icon = the input icon
export default function SearchFilter({
  term,
  label,
  icon,
}: {
  term: string;
  label: string;
  icon: React.ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [query] = useDebounce(search, 1000);

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
    <TextField
      onChange={(e) => setSearch(e.target.value)}
      label={label}
      size="small"
      InputProps={{
        startAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      }}
    />
  );
}
