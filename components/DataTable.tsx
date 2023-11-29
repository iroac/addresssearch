"use client";

const mockdata: {} = [
  {
    id: 2202091,
    nome: "Caldeirão Grande do Piauí",
    microrregiao: {
      id: 22015,
      nome: "Alto Médio Canindé",
      mesorregiao: {
        id: 2204,
        nome: "Sudeste Piauiense",
        UF: {
          id: 22,
          sigla: "PI",
          nome: "Piauí",
          regiao: {
            id: 2,
            sigla: "NE",
            nome: "Nordeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 220009,
      nome: "Picos",
      "regiao-intermediaria": {
        id: 2203,
        nome: "Picos",
        UF: {
          id: 22,
          sigla: "PI",
          nome: "Piauí",
          regiao: {
            id: 2,
            sigla: "NE",
            nome: "Nordeste",
          },
        },
      },
    },
  },
  {
    id: 2202109,
    nome: "Campinas do Piauí",
    microrregiao: {
      id: 22015,
      nome: "Alto Médio Canindé",
      mesorregiao: {
        id: 2204,
        nome: "Sudeste Piauiense",
        UF: {
          id: 22,
          sigla: "PI",
          nome: "Piauí",
          regiao: {
            id: 2,
            sigla: "NE",
            nome: "Nordeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 220012,
      nome: "Simplício Mendes",
      "regiao-intermediaria": {
        id: 2203,
        nome: "Picos",
        UF: {
          id: 22,
          sigla: "PI",
          nome: "Piauí",
          regiao: {
            id: 2,
            sigla: "NE",
            nome: "Nordeste",
          },
        },
      },
    },
  },
  {
    id: 2202117,
    nome: "Campo Alegre do Fidalgo",
    microrregiao: {
      id: 22015,
      nome: "Alto Médio Canindé",
      mesorregiao: {
        id: 2204,
        nome: "Sudeste Piauiense",
        UF: {
          id: 22,
          sigla: "PI",
          nome: "Piauí",
          regiao: {
            id: 2,
            sigla: "NE",
            nome: "Nordeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 220014,
      nome: "São João do Piauí",
      "regiao-intermediaria": {
        id: 2204,
        nome: "São Raimundo Nonato",
        UF: {
          id: 22,
          sigla: "PI",
          nome: "Piauí",
          regiao: {
            id: 2,
            sigla: "NE",
            nome: "Nordeste",
          },
        },
      },
    },
  },
];

import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useMemo } from "react";

function DataTable({
  data,
  municipio,
  uf,
  region,
  microregion,
  imedrigion,
}: any) {
  // Memoized the filter data value and filter the data based if the promps values exist or not.
  // Add a mockdata either for developer purpose to avoid make request, bacause it's up to 2MB and nextjs not cache over this amount
  const filteredData = useMemo(() => {
    if (!data) {
      return mockdata;
    }

    if (!municipio && !uf && !region && !microregion && !imedrigion && data) {
      return data;
    }

    return data.filter((muni: any) => {
      const matchesmunicipio =
        !municipio || muni.nome.toLowerCase().includes(municipio.toLowerCase());
      const matchesUF =
        !uf || muni["regiao-imediata"]["regiao-intermediaria"].UF.nome === uf;
      const matchesRegion =
        !region ||
        muni["regiao-imediata"]["regiao-intermediaria"].UF.regiao.nome.includes(
          region
        );
      const matchesMicroRegion =
        !microregion ||
        muni.microrregiao.nome
          .toLowerCase()
          .includes(microregion.toLowerCase());
      const matchesimedrigion =
        !imedrigion ||
        muni["regiao-imediata"].nome
          .toLowerCase()
          .includes(imedrigion.toLowerCase());

      return (
        matchesmunicipio &&
        matchesRegion &&
        matchesUF &&
        matchesMicroRegion &&
        matchesimedrigion
      );
    });
  }, [data, municipio, uf, region, microregion, imedrigion]);

  const rowData = filteredData.map((muni: any) => {
    return {
      id: muni.id,
      nome: muni.nome,
      micro: muni.microrregiao.nome,
      imediata: muni["regiao-imediata"].nome,
      uf: muni["regiao-imediata"]["regiao-intermediaria"].UF.nome,
      regiao: muni["regiao-imediata"]["regiao-intermediaria"].UF.regiao.nome,
    };
  });

  const rows: GridRowsProp = rowData;
  const columns: GridColDef[] = [
    { field: "nome", headerName: "Município", width: 250 },
    { field: "micro", headerName: "Microregião", flex: 1 },
    { field: "imediata", headerName: "Região Imediata", flex: 1 },
    { field: "uf", headerName: "Estado", flex: 1 },
    { field: "regiao", headerName: "Região", flex: 0.5 },
  ];

  return (
    <div style={{ height: "60%", width: "95%" }}>
      <DataGridPro
        sx={{ backgroundColor: "white", boxShadow: 2 }}
        aria-label="Municípios"
        autoPageSize={true}
        hideFooter={true}
        rows={rows}
        columns={columns}
      />
    </div>
  );
}

export default DataTable;
