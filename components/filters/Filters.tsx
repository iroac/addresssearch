"use client";
const optionsStates = [
  "",
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];
const optionsRegion = [
  "Norte",
  "Nordeste",
  "Centro-Oeste",
  "Sudeste",
  "Sul",
  "",
];

import { useState } from "react";

import {
  Checkbox,
  Fab,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import SearchFilter from "@/components/filters/SearchFilter";
import SelectFilter from "@/components/filters/SelectFilter";

export default function Filters() {
  const [selectedItems, setSelectedItems] = useState<String[]>([
    "Município",
    "Microregião",
    "Estado - UF",
  ]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (item: any) => () => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem !== item)
      );
    } else {
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{ width: "90%" }}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {selectedItems.includes("Município") && (
          <SearchFilter term="search" label="Município" icon={<SearchIcon />} />
        )}
        {selectedItems.includes("Microregião") && (
          <SearchFilter
            term="microregion"
            label="Microregião"
            icon={<LocationCityIcon />}
          />
        )}

        {selectedItems.includes("Região imediata") && (
          <SearchFilter
            term="imedrigion"
            label="Região imediata"
            icon={<LocationSearchingIcon />}
          />
        )}

        {selectedItems.includes("Estado - UF") && (
          <SelectFilter term="uf" label="Estado - UF" options={optionsStates} />
        )}
        {selectedItems.includes("Região") && (
          <SelectFilter term="region" label="Região" options={optionsRegion} />
        )}
      </Stack>

      <Stack
        direction="column"
        sx={{ width: "10%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Fab onClick={handleClick} color="primary" size="medium">
          <FilterAltIcon sx={{ color: "white" }} />
        </Fab>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleItemClick("Município")}>
            <Checkbox checked={selectedItems.includes("Município")} />
            <ListItemText primary="Município" />
          </MenuItem>
          <MenuItem onClick={handleItemClick("Microregião")}>
            <Checkbox checked={selectedItems.includes("Microregião")} />
            <ListItemText primary="Microregião" />
          </MenuItem>
          <MenuItem onClick={handleItemClick("Região imediata")}>
            <Checkbox checked={selectedItems.includes("Região imediata")} />
            <ListItemText primary="Região imediata" />
          </MenuItem>
          <MenuItem onClick={handleItemClick("Estado - UF")}>
            <Checkbox checked={selectedItems.includes("Estado - UF")} />
            <ListItemText primary="Estado - UF" />
          </MenuItem>
          <MenuItem onClick={handleItemClick("Região")}>
            <Checkbox checked={selectedItems.includes("Região")} />
            <ListItemText primary="Região" />
          </MenuItem>
        </Menu>
      </Stack>
    </>
  );
}
