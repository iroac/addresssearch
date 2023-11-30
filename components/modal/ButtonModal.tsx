"use client";

import { Button } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useState } from "react";
import ModalCep from "./ModalCep";
import { useRouter } from "next/navigation";

export default function ButtonModal() {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  // Handle the modal visibility
  const handleModal = () => {
    setModal(!modal);
  };

  // Handle the navegation of the model, it happens here cause router can't be add on modal components, has to be something on the page.
  const handleNavegation = (CEP: any) => {
    router.push(`/cep/${CEP}`);
  };

  return (
    <div>
      {modal ? (
        <ModalCep
          handleModal={handleModal}
          modal={modal}
          navigateCep={handleNavegation}
        />
      ) : (
        ""
      )}
      <Button
        onClick={handleModal}
        startIcon={<TravelExploreIcon sx={{ color: "white" }} />}
        variant="contained"
        color="primary"
        size="small"
        sx={{ color: "white", height: "40px", fontSize: "20px", width: "auto" }}
      >
        Pesquisar CEP
      </Button>
    </div>
  );
}
