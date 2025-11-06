"use client";
import { Navigation } from "@/components/Navigation";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AppRouterCacheProvider>
      <QueryClientProvider client={queryClient}>
        <Box display="flex" justifyContent="center">
          <Navigation />
        </Box>
        <Box paddingY="20px" paddingX="50px">
          {children}
        </Box>
      </QueryClientProvider>
    </AppRouterCacheProvider>
  );
};
