import { useQuery } from '@tanstack/react-query';
import { getNarrations } from '@/api/narrations';
import type { Narration } from '@/api/narrations.types';

export const useGetNarrations = () =>
  useQuery<Narration[], Error>({
    queryKey: ['narrations'],
    queryFn: getNarrations,
    select: (data) => data.slice(0, 9)
  });
