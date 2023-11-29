"use client";

import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

export default function ImedRegionFilter() {
  const router = useRouter();
  const [imedrigion, setImedRegion] = useState("");
  const [query] = useDebounce(imedrigion, 1000);

  useEffect(() => {
    const currentQueryParams = new URLSearchParams(window.location.search);

    if (!query) {
      currentQueryParams.delete("imedrigion");
      router.push(`/?${currentQueryParams.toString()}`);
    } else {
      currentQueryParams.set("imedrigion", query);
      router.push(`/?${currentQueryParams.toString()}`);
    }
  }, [query]);

  return (
    <TextField
      onChange={(e) => setImedRegion(e.target.value)}
      label="Região imediata"
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
