import { useQuery } from '@tanstack/react-query';
import { getReciters } from '@/api/reciters';
import type { Reciter } from '@/api/reciters.types';

export const useGetReciters = () =>
  useQuery<Reciter[], Error>({
    queryKey: ['reciters'],
    queryFn: getReciters
  });
