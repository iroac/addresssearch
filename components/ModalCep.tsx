"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Link from "next/link";

const boxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  justifyContent: "center",
  alignContent: "center",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "row",
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  border: 2,
  borderColor: "primary.main",
  borderRadius: 2,
  boxShadow: 24,
};

export default function ModalCep({ handleModal }: any) {
  const [CEP, setCEP] = useState("");
  const [errorInput, setErrorInput] = useState(false);

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

  return (
    <div>
      <Modal open={handleModal} onClose={handleModal}>
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
            <IconButton sx={{ p: 0, ml: 1, mt: 1 }} onClick={handleModal}>
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
              sx={{ width: "50%", mb: 4, mt: 3 }}
              error={errorInput && true}
              helperText={errorInput ? "endereço incorreto" : ""}
              label="CEP"
              variant="standard"
              color="primary"
              placeholder="12345-000"
              value={CEP}
              onChange={(e) => handleSearch(e.target.value)}
            />

            <Link href={`/cep/${CEP}`}>
              <IconButton
                sx={{ m: 0, p: 0, mt: 2 }}
                disabled={errorInput || !CEP ? true : false}
              >
                <ArrowCircleRightIcon
                  color={`${errorInput ? "error" : "primary"}`}
                  fontSize="large"
                />
              </IconButton>
            </Link>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
