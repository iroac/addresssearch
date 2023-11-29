import { Stack, Typography } from "@mui/material";

export async function getCEP(cep: any) {
  const res: any = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data: any = await res.json();

  return data;
}

export default async function Page({ params }: { params: { num: string } }) {
  const data = await getCEP(params.num);

  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center mt-20">
      <Typography variant="h6" color="black">
        INFORMAÇÕES CEP {data.cep}
      </Typography>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ width: "90%", height: "80%", bgcolor: "white", p: 6 }}
      >
        <Typography variant="body1" color="initial">
          Rua: {data.logradouro}
        </Typography>
        <Typography variant="body1" color="initial">
          Bairro: {data.bairro}
        </Typography>
        <Typography variant="body1" color="initial">
          Cidade: {data.localidade}
        </Typography>
        <Typography variant="body1" color="initial">
          UF: {data.uf}
        </Typography>
        <Typography variant="body1" color="initial">
          IBGE: {data.ibge}
        </Typography>
        <Typography variant="body1" color="initial">
          DDD: {data.ddd}
        </Typography>
      </Stack>
    </div>
  );
}
