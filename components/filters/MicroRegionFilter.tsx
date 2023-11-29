"use client";

import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

export default function MicroRegionFilter() {
  const router = useRouter();
  const [microregion, setMicroRegion] = useState("");
  const [query] = useDebounce(microregion, 1000);

  useEffect(() => {
    const currentQueryParams = new URLSearchParams(window.location.search);

    if (!query) {
      currentQueryParams.delete("microregion");
      router.push(`/?${currentQueryParams.toString()}`);
    } else {
      currentQueryParams.set("microregion", query);
      router.push(`/?${currentQueryParams.toString()}`);
    }
  }, [query]);

  return (
    <TextField
      onChange={(e) => setMicroRegion(e.target.value)}
      label="Microregião"
      id="outlined-start-adornment"
      sx={{ width: "25ch" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
