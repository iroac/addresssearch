

import DataTable from "@/components/DataTable";
import getData from '../utils/getData'



export default async function Home() {

const data: any = await getData();
  

  return (
  <div className=' h-screen w-screen flex flex-col justify-center items-center '  >
<DataTable data={data} />
  </div>
  )
}
 