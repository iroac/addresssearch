'use client'


import { Autocomplete, TextField } from "@mui/material"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce';

const options = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
  ];

export default function StateFilter() {
const router = useRouter()
const [UF, setUF] = useState('')
const [query] = useDebounce(UF, 1000);

useEffect(() => {
    const currentQueryParams = new URLSearchParams(window.location.search);

    if (!query) {
        currentQueryParams.delete('uf');
        router.push(`/?${currentQueryParams.toString()}`);
    } else {
        currentQueryParams.set('uf', query);
        router.push(`/?${currentQueryParams.toString()}`);
    }
}, [query]);


  return (
    
              <Autocomplete
  disablePortal
  value={UF}
  inputValue={UF}
  onInputChange={(event, newInputValue) => {
    setUF(newInputValue);
  }}
  onChange={(event: any, newValue: string | null) => {
    setUF(newValue || '');
  }}
  options={options}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Estado - UF" />}
/>

    
  )
}

