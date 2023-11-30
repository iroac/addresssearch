"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function ButtonCepPage() {
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        sx={{
          color: "white",
          m: 0,
          height: "40px",
          fontSize: "20px",
          width: "auto",
        }}
        startIcon={<KeyboardBackspaceIcon />}
        onClick={() => {
          router.push(`/`);
        }}
      >
        Back home
      </Button>
    </>
  );
}
