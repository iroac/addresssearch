'use client'

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from "@mui/material"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce';

function SearchFilter() {
const router = useRouter()
const [search, setSearch] = useState('')
const [query] = useDebounce(search, 1000);

useEffect(() => {
    if(!query) {
        router.push('/')
    } else {
        router.push(`/?search=${search}`)
    }
}, [query])

  return (
    <div>
               <TextField
               onChange={(e) => setSearch(e.target.value)}
          label="Município"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="end">
                <SearchIcon />
            </InputAdornment>,
          }}
        />

    </div>
  )
}

export default SearchFilter