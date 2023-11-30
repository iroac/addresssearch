"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function ButtonCepError() {
  const router = useRouter();
  return (
    <>
      <Button
        sx={{ mt: 10 }}
        variant="outlined"
        color="error"
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
