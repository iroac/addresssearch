"use client";

import { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const boxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  justifyContent: "center",
  alignContent: "center",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "row",
  width: { sm: "30%", xs: "auto" },
  height: { sm: "15%", xs: "auto" },
  bgcolor: "background.paper",
  border: 2,
  p: 0.5,
  borderColor: "primary.main",
  borderRadius: 2,
  boxShadow: 24,
};

export default function ModalCep({ handleModal, modal, navigateCep }: any) {
  const [CEP, setCEP] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  // Verify the CEP format and update the setCep
  const handleSearch = (e: any) => {
    const isValidCEP: any = (cep: string) => /^[0-9]{5}-?[0-9]{0,3}$/.test(cep);
    const numericValue = e.replace(/\D/g, "");

    if (!isValidCEP(numericValue) && numericValue.length > 8) {
      setErrorInput(true);
    } else {
      setErrorInput(false);

      const formattedCEP = numericValue.replace(/(\d{5})(\d{3})/, "$1-$2");
      setCEP(formattedCEP);
    }
  };

  // Triggers a error if the routes modification happens inside the modal, so called it on the ButtonModal and pass here as promps.
  const handleButtonClick = () => {
    if (!errorInput && CEP) {
      navigateCep(CEP);
    }
  };

  return (
    <div>
      <Modal open={modal} onClose={handleModal}>
        <Box sx={boxStyle}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              width: "10%",
              height: "100%",
            }}
          >
            <IconButton sx={{ p: 0 }} onClick={handleModal}>
              <CloseIcon color="primary" fontSize="small" />
            </IconButton>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "90%", height: "100%" }}
          >
            <TextField
              sx={{ width: "80%", mb: 4, mt: 3 }}
              error={errorInput && true}
              helperText={
                errorInput ? "endereço incorreto" : "Insira o endereço"
              }
              label="CEP"
              variant="standard"
              color="primary"
              placeholder="12345-000"
              value={CEP}
              onChange={(e) => handleSearch(e.target.value)}
            />

            <IconButton
              sx={{ m: 0, p: 0, mt: 2 }}
              disabled={errorInput || !CEP || CEP.length < 8 ? true : false}
              onClick={handleButtonClick}
            >
              <ArrowCircleRightIcon
                color={`${errorInput ? "error" : "primary"}`}
                fontSize="large"
              />
            </IconButton>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
