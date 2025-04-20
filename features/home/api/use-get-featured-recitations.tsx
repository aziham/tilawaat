import { useQuery } from '@tanstack/react-query';
import { getFeaturedRecitations } from '@/api/recitations';
import type { FeaturedRecitation } from '@/api/recitations.types';

export const useGetFeaturedRecitations = () =>
  useQuery<FeaturedRecitation[], Error>({
    queryKey: ['featured-recitations'],
    queryFn: getFeaturedRecitations
  });
