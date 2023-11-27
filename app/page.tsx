

import DataTable from "@/components/DataTable";
import getData from '../utils/getData'
import SearchFilter from "@/components/SearchFilter";



export default async function Home({ searchParams }: {searchParams: { [key: string ]: string | string[] | undefined }}) {

const search = searchParams['search'] ?? ''

const data: any = await getData();
  

  return (
  <div className=' h-screen w-screen flex flex-col justify-center items-center '  >

    <div className=' h-auto w-5/6 flex flex-wrap justify-start items-start mb-10'  >
      <SearchFilter />
    </div>

<DataTable search={search} data={data} />
  </div>
  )
}
 