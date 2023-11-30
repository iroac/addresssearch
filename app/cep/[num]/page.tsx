import ButtonCepPage from "@/components/cep/ButtonCepPage";
import getCep from "@/utils/getCep";
import { Chip, Stack, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import ButtonCepError from "@/components/cep/ButtonCepError";

export default async function Page({ params }: { params: { num: string } }) {
  const data = await getCep(params.num);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      {data.erro ? (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "auto", heigth: "auto" }}
        >
          <Typography variant="h2" color="error">
            {params.num}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2" color="error" sx={{ fontWeight: "bold" }}>
              NÃO ENCONTRADO
            </Typography>
            <ErrorIcon color="error" sx={{ width: "auto", height: "50px" }} />
          </Stack>
          <ButtonCepError />
        </Stack>
      ) : (
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            width: "auto",
            height: "auto",
            bgcolor: "white",
            border: 2,
            borderColor: "primary.main",
            borderRadius: 5,
          }}
        >
          <Stack
            sx={{ height: "5%", width: "auto", mt: 2 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold" }}
              color="primary"
            >
              ENDEREÇO
            </Typography>
          </Stack>

          <Stack
            sx={{ height: "auto%", width: "auto", pt: 8, pb: 10, px: 4 }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
            direction="row"
            useFlexGap
            flexWrap="wrap"
          >
            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" color="primary">
                CEP:
              </Typography>
              <Chip
                sx={{ width: "auto", height: "32px", fontSize: "20px" }}
                label={`${data.cep}`}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" color="primary">
                Rua:
              </Typography>
              <Chip
                sx={{ width: "auto", height: "32px", fontSize: "20px" }}
                label={`${data.logradouro}`}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" color="primary">
                Bairro:
              </Typography>
              <Chip
                sx={{ width: "auto", height: "32px", fontSize: "20px" }}
                label={`${data.bairro}`}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" color="primary">
                Cidade:
              </Typography>
              <Chip
                sx={{ width: "auto", height: "32px", fontSize: "20px" }}
                label={`${data.localidade}`}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" color="primary">
                UF:
              </Typography>
              <Chip
                sx={{ width: "auto", height: "30px", fontSize: "18px" }}
                label={`${data.uf}`}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" color="primary">
                IBGE:
              </Typography>
              <Chip
                sx={{ width: "auto", height: "30px", fontSize: "18px" }}
                label={`${data.ibge}`}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" color="primary">
                DDD:
              </Typography>
              <Chip
                sx={{ width: "auto", height: "32px", fontSize: "20px" }}
                label={`${data.ddd}`}
              />
            </Stack>
          </Stack>

          <Stack
            sx={{ height: "10%", width: "100%", pl: 2, pt: 2 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <ButtonCepPage />
          </Stack>
        </Stack>
      )}
    </div>
  );
}
