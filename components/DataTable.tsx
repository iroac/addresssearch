'use client'


import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {  DataGridPro  } from '@mui/x-data-grid-pro';
import { useMemo } from 'react';

function DataTable({data, search}: any) {
    const filteredData = useMemo(() => {
        if (!search) {
          return data;
        }
    
        return data.filter((muni: any) =>
          muni.nome.toLowerCase().includes(search.toLowerCase())
        );
      }, [data, search]);
    
      const rowData = filteredData.map((muni: any) => {
        return {
          id: muni.id,
          nome: muni.nome,
          micro: muni.microrregiao.nome,
          imediata: muni['regiao-imediata'].nome,
          uf: muni['regiao-imediata']['regiao-intermediaria'].UF.nome,
          regiao: muni['regiao-imediata']['regiao-intermediaria'].UF.regiao.nome,
        };
      });
    
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