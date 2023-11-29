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
          Rua:
        </Typography>
        <Chip label={`${data.logradouro}`} />
        <Typography variant="body1" color="initial">
          Bairro:
        </Typography>
        <Chip label={`${data.bairro}`} />
        <Typography variant="body1" color="initial">
          Cidade:
        </Typography>
        <Chip label={`${data.localidade}`} />
        <Typography variant="body1" color="initial">
          UF:
        </Typography>
        <Chip label={`${data.uf}`} />
        <Typography variant="body1" color="initial">
          IBGE:
        </Typography>
        <Chip label={`${data.ibge}`} />
        <Typography variant="body1" color="initial">
          DDD:
        </Typography>
        <Chip label={`${data.ddd}`} />
      </Stack>
      <div className=" mt-10 justify-start items-start ">
        <Link href="/">back home</Link>
      </div>
    </div>
  );
}
