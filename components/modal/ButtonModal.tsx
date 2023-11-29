"use client";

import { Button } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useState } from "react";
import ModalCep from "./ModalCep";

export default function ButtonModal() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      {modal ? <ModalCep handleModal={handleModal} /> : ""}
      <Button
        onClick={handleModal}
        startIcon={<TravelExploreIcon sx={{ color: "white" }} />}
        variant="contained"
        color="primary"
        size="small"
        sx={{ color: "white" }}
      >
        Pesquisar CEP
      </Button>
    </div>
  );
}
