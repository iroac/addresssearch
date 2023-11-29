// Utils
import getData from "../utils/getData";
// Components
import DataTable from "@/components/DataTable";
import Filters from "@/components/filters/Filters";
import ButtonModal from "@/components/modal/ButtonModal";
// MUI
import { Stack } from "@mui/material";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = searchParams["search"] ?? "";
  const uf = searchParams["uf"] ?? "";
  const region = searchParams["region"] ?? "";
  const microregion = searchParams["microregion"] ?? "";
  const imedrigion = searchParams["imedrigion"] ?? "";

  const data: any = null;
  // await getData();

  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center ">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          mt: "30px",
          mb: "10px",
          height: "30%",
          width: "95%",
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100", width: "85%" }}
        >
          <Filters />
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          sx={{ height: "100%", width: "15%" }}
        >
          <ButtonModal />
        </Stack>
      </Stack>

      <DataTable
        search={search}
        uf={uf}
        region={region}
        microregion={microregion}
        imedrigion={imedrigion}
        data={data}
      />
    </div>
  );
}
