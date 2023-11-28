

import DataTable from "@/components/DataTable";
import getData from '../utils/getData'
import SearchFilter from "@/components/SearchFilter";
import StateFilter from "@/components/StateFilter";
import RegionFilter from "@/components/RegionFilter";



export default async function Home({ searchParams }: {searchParams: { [key: string ]: string | string[] | undefined }}) {

const search = searchParams['search'] ?? ''
const uf = searchParams['uf'] ?? ''
const region = searchParams['region'] ?? ''

const data: any = await getData();
  

  return (
  <div className=' h-screen w-screen flex flex-col justify-center items-center '  >

    <div className=' h-auto w-5/6 flex flex-wrap justify-start items-center mb-10 gap-2'  >
      <SearchFilter />
      <StateFilter />
      <RegionFilter />
    </div>

<DataTable search={search} uf={uf} region={region} data={data} />
  </div>
  )
}
 