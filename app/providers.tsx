'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/api/query-client';
import { SidebarProvider } from '@/components/ui/sidebar';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>{children}</SidebarProvider>;
    </QueryClientProvider>
  );
}
