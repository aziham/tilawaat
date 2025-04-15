import { QueryClient } from '@tanstack/react-query';

// Milliseconds in a week (7 days)
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: ONE_WEEK_MS, // Data stays fresh for 1 week
      gcTime: ONE_WEEK_MS, // Cache persists for 1 week
      retry: 5, // Retry failed requests
      retryDelay: 1000, // Delay between retries (1s)
      refetchOnWindowFocus: false, // Don't refetch on tab switch
      refetchOnReconnect: 'always', // Refetch if connection drops
      refetchOnMount: false, // Don't refetch when component mounts
      networkMode: 'online' // Prioritize online data
    },
    mutations: {
      retry: 3 // Retry failed mutations
    }
  }
});
