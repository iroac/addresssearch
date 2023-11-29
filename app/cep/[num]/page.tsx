import getCep from "@/utils/getCep";
import { Chip, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default async function Page({ params }: { params: { num: string } }) {
  const data = await getCep(params.num);

  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center pt-5">
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
          Rua: <Chip label={`${data.logradouro}`} />
        </Typography>
        <Typography variant="body1" color="initial">
          Bairro: <Chip label={`${data.bairro}`} />
        </Typography>
        <Typography variant="body1" color="initial">
          Cidade: <Chip label={`${data.localidade}`} />
        </Typography>
        <Typography variant="body1" color="initial">
          UF: <Chip label={`${data.uf}`} />
        </Typography>
        <Typography variant="body1" color="initial">
          IBGE: <Chip label={`${data.ibge}`} />
        </Typography>
        <Typography variant="body1" color="initial">
          DDD: <Chip label={`${data.ddd}`} />
        </Typography>
      </Stack>
      <div className=" mt-10 justify-start items-start ">
        <Link href="/">back home</Link>
      </div>
    </div>
  );
}
