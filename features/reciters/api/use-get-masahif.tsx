import { useQuery } from '@tanstack/react-query';
import { getMasahif } from '@/api/recitations';
import type { Mushaf } from '@/api/recitations.types';

export const useGetMasahif = () =>
  useQuery<Mushaf[], Error>({
    queryKey: ['masahif'],
    queryFn: getMasahif
  });
