'use client'


import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {  DataGridPro  } from '@mui/x-data-grid-pro';

function DataTable({data}: {data: any}) {
    
    const rowData = data.map((muni: any) => {
        let regiaoImediata = muni['regiao-imediata'];
        let regiaoIntermediaria = regiaoImediata['regiao-intermediaria'];
        return { id: muni.id, nome: muni.nome, micro: muni.microrregiao.nome, imediata: regiaoImediata.nome, uf: regiaoIntermediaria.UF.nome , regiao: regiaoIntermediaria.UF.regiao.nome }
    })
    
    const rows: GridRowsProp = rowData;
    
      const columns: GridColDef[] = [
        { field: 'nome', headerName: 'Município', width: 250 },
        { field: 'micro', headerName: 'Micro Região', width: 200 },
        { field: 'imediata', headerName: 'Região Imediata', width: 200 },
        { field: 'uf', headerName: 'Estado', width: 200  },
        { field: 'regiao', headerName: 'Região', width: 200 },
      ];

  return (
    <div style={{ height: 600, width: '90%' }}>
    <DataGridPro sx={{ backgroundColor: 'white', boxShadow: 2, }} aria-label='Municípios'  autoPageSize={true} hideFooter={true} rows={rows} columns={columns} />
  </div>
  )
}

export default DataTable