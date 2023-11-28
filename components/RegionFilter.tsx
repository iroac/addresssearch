'use client'

import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, InputAdornment, TextField } from "@mui/material"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce';

const options = [ 'Norte', 'Nordeste', 'Centro-Oeste', 'Suldeste', 'Sul'];

export default function RegionFilter() {
const router = useRouter()
const [region, setRegion] = useState('')
const [query] = useDebounce(region, 1000);

useEffect(() => {
    const currentQueryParams = new URLSearchParams(window.location.search);

    if (!query) {
        currentQueryParams.delete('region');
        router.push(`/?${currentQueryParams.toString()}`);
    } else {
        currentQueryParams.set('region', query);
        router.push(`/?${currentQueryParams.toString()}`);
    }
}, [query]);


  return (
    <div>
              <Autocomplete
  disablePortal
  id="region-box"
  value={region}
  onChange={(event: any, newValue: string | null) => {
    setRegion(newValue || '');
  }}
  options={options}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Região" />}
/>

    </div>
  )
}
