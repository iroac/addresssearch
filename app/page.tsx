

import DataTable from "@/components/DataTable";
import getData from '../utils/getData'
import SearchFilter from "@/components/SearchFilter";
import StateFilter from "@/components/StateFilter";
import RegionFilter from "@/components/RegionFilter";
import { Stack, Button } from "@mui/material";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';



export default async function Home({ searchParams }: {searchParams: { [key: string ]: string | string[] | undefined }}) {

const search = searchParams['search'] ?? ''
const uf = searchParams['uf'] ?? ''
const region = searchParams['region'] ?? ''

const data: any = await getData();
  

  return (
  <div className=' h-screen w-screen flex flex-col justify-center items-center '  >

    <Stack direction='row' justifyContent="flex-start" alignItems="center"  sx={{ mt: '30px', mb: '10px', height: '30%', width: '95%', bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}  >
      <Stack direction='row' spacing={2} useFlexGap flexWrap="wrap" justifyContent="center" alignItems="center"  sx={{ height: '100', width: '85%'}}    > 
      <SearchFilter />
      <StateFilter />
      <RegionFilter />
      </Stack>

      <Stack direction='row' justifyContent="flex-end" alignItems="flex-start" sx={{ height: '100%', width: '15%' }} >
        <Button startIcon={<TravelExploreIcon sx={{ color: 'white' }} />} variant="contained" color="primary" size="small" sx={{ mt: 2, mx: 2, color: 'white' }} > Pesquisar CEP </Button>
      </Stack>
   
    </Stack>

<DataTable search={search} uf={uf} region={region} data={data} />
  </div>
  )
}
 