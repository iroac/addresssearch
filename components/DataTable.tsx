'use client'

const mockdata: {} = [{
    "id": 2202091,
    "nome": "Caldeirão Grande do Piauí",
    "microrregiao": {
        "id": 22015,
        "nome": "Alto Médio Canindé",
        "mesorregiao": {
            "id": 2204,
            "nome": "Sudeste Piauiense",
            "UF": {
                "id": 22,
                "sigla": "PI",
                "nome": "Piauí",
                "regiao": {
                    "id": 2,
                    "sigla": "NE",
                    "nome": "Nordeste"
                }
            }
        }
    },
    "regiao-imediata": {
        "id": 220009,
        "nome": "Picos",
        "regiao-intermediaria": {
            "id": 2203,
            "nome": "Picos",
            "UF": {
                "id": 22,
                "sigla": "PI",
                "nome": "Piauí",
                "regiao": {
                    "id": 2,
                    "sigla": "NE",
                    "nome": "Nordeste"
                }
            }
        }
    }
},
{
    "id": 2202109,
    "nome": "Campinas do Piauí",
    "microrregiao": {
        "id": 22015,
        "nome": "Alto Médio Canindé",
        "mesorregiao": {
            "id": 2204,
            "nome": "Sudeste Piauiense",
            "UF": {
                "id": 22,
                "sigla": "PI",
                "nome": "Piauí",
                "regiao": {
                    "id": 2,
                    "sigla": "NE",
                    "nome": "Nordeste"
                }
            }
        }
    },
    "regiao-imediata": {
        "id": 220012,
        "nome": "Simplício Mendes",
        "regiao-intermediaria": {
            "id": 2203,
            "nome": "Picos",
            "UF": {
                "id": 22,
                "sigla": "PI",
                "nome": "Piauí",
                "regiao": {
                    "id": 2,
                    "sigla": "NE",
                    "nome": "Nordeste"
                }
            }
        }
    }
},
{
    "id": 2202117,
    "nome": "Campo Alegre do Fidalgo",
    "microrregiao": {
        "id": 22015,
        "nome": "Alto Médio Canindé",
        "mesorregiao": {
            "id": 2204,
            "nome": "Sudeste Piauiense",
            "UF": {
                "id": 22,
                "sigla": "PI",
                "nome": "Piauí",
                "regiao": {
                    "id": 2,
                    "sigla": "NE",
                    "nome": "Nordeste"
                }
            }
        }
    },
    "regiao-imediata": {
        "id": 220014,
        "nome": "São João do Piauí",
        "regiao-intermediaria": {
            "id": 2204,
            "nome": "São Raimundo Nonato",
            "UF": {
                "id": 22,
                "sigla": "PI",
                "nome": "Piauí",
                "regiao": {
                    "id": 2,
                    "sigla": "NE",
                    "nome": "Nordeste"
                }
            }
        }
    }
}]


import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {  DataGridPro  } from '@mui/x-data-grid-pro';
import { useMemo } from 'react';

function DataTable({data, search, uf, region}: any) {
    const filteredData = useMemo(() => {
if(!data) {
    return  mockdata
}

        if (!search && !uf && !region && data) {
          return data;
        }
    

        return data.filter((muni: any) => {
            const matchesSearch = !search || muni.nome.toLowerCase().includes(search.toLowerCase());
            const matchesUF = !uf || muni['regiao-imediata']['regiao-intermediaria'].UF.nome === uf;
            const matchesRegion = !region || muni['regiao-imediata']['regiao-intermediaria'].UF.regiao.nome.includes(region);
        
            return matchesSearch && matchesRegion && matchesUF;
          });
        }, [data, search, uf]);
        
    
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
        { field: 'micro', headerName: 'Micro Região', flex: 1 },
        { field: 'imediata', headerName: 'Região Imediata', flex: 1},
        { field: 'uf', headerName: 'Estado', flex: 1  },
        { field: 'regiao', headerName: 'Região', flex: 0.5 },
      ];

  return (
    <div style={{ height: '60%', width: '95%' }}>
    <DataGridPro sx={{ backgroundColor: 'white', boxShadow: 2, }} aria-label='Municípios'  autoPageSize={true} hideFooter={true} rows={rows} columns={columns} />
  </div>
  )
}

export default DataTable