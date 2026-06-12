import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
      },
    },
  });

<<<<<<< HEAD
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
=======
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
>>>>>>> 4fc1b16 (feat: refactor architecture, add discount wheel, improve responsive layout and update documentation)
}
