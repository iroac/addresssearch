// Utils
import getData from "../utils/getData";
// Components
import DataTable from "@/components/DataTable";
import Filters from "@/components/filters/Filters";
import ButtonModal from "@/components/modal/ButtonModal";
// MUI
import { Stack, Typography } from "@mui/material";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Define the routes params for the table filters
  const municipio = searchParams["municipio"] ?? "";
  const uf = searchParams["uf"] ?? "";
  const region = searchParams["region"] ?? "";
  const microregion = searchParams["microregion"] ?? "";
  const imedrigion = searchParams["imedrigion"] ?? "";

  const data: any = await getData();

  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center bg-slate-100 ">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "5%", width: "95%" }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ height: "100%", width: "50%" }}
        >
          <Typography variant="h4" color="primary">
            Address Search
          </Typography>
        </Stack>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          sx={{ height: "100%", width: "50%" }}
        >
          <ButtonModal />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          mt: "5px",
          mb: "10px",
          height: { sm: "30%", xs: "auto" },
          px: 2,
          py: 2,
          width: "95%",
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          justifyContent="center"
          spacing={0.5}
          alignItems="center"
          sx={{ height: "100%", width: "100%" }}
        >
          <Filters />
        </Stack>
      </Stack>

      <DataTable
        municipio={municipio}
        uf={uf}
        region={region}
        microregion={microregion}
        imedrigion={imedrigion}
        data={data}
      />
    </div>
  );
}
