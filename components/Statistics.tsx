"use client";
import { getStatisticsnData } from "@/api/getReconciliationData";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { TotalNumbers } from "./Stats/TotalNumbers";
import { ClaimsPerPatient } from "./Stats/ClaimsPerPatient";
import { InvoicesPerClaim } from "./Stats/InvoicesPerClaim";

export const Statistices = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: getStatisticsnData,
    retry: 2,
  });

  return !data || isLoading ? (
    "loading.............."
  ) : (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <TotalNumbers {...data?.numbers_stats} />
      <ClaimsPerPatient data={data.claims_per_patient} />
      <InvoicesPerClaim data={data.invoices_per_claim} />
      {JSON.stringify(data)}
    </Box>
  );
};
