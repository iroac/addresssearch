'use client'

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from "@mui/material"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce';

export default function SearchFilter() {
const router = useRouter()
const [search, setSearch] = useState('')
const [query] = useDebounce(search, 1000);

useEffect(() => {
    const currentQueryParams = new URLSearchParams(window.location.search);

    if (!query) {
        currentQueryParams.delete('search');
        router.push(`/?${currentQueryParams.toString()}`);
    } else {
        currentQueryParams.set('search', query);
        router.push(`/?${currentQueryParams.toString()}`);
    }
}, [query]);

  return (
               <TextField
               onChange={(e) => setSearch(e.target.value)}
          label="Município"
          id="outlined-start-adornment"
          sx={{ width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="end">
                <SearchIcon />
            </InputAdornment>,
          }}
        />
  )
}
