import { useGetReciters } from './use-get-reciters';
import { useGetMasahif } from './use-get-masahif';
import { useGetNarrations } from './use-get-narrations';
import type { Reciter } from '@/api/reciters.types';
import type { Mushaf } from '@/api/recitations.types';
import type { Narration } from '@/api/narrations.types';
import type { ReciterFull } from './reciters.types';

type useGetRecitersFullProps = {
  page?: number;
  limit?: number;
};

export function useGetRecitersFull({
  page = 1,
  limit = 20
}: useGetRecitersFullProps) {
  const recitersQuery = useGetReciters();
  const masahifQuery = useGetMasahif();
  const narrationsQuery = useGetNarrations();

  const isLoading =
    recitersQuery.isLoading ||
    masahifQuery.isLoading ||
    narrationsQuery.isLoading;
  const isError =
    recitersQuery.isError || masahifQuery.isError || narrationsQuery.isError;

  const merged: ReciterFull[] =
    recitersQuery.data && masahifQuery.data && narrationsQuery.data
      ? mergeReciterData(
          recitersQuery.data,
          masahifQuery.data,
          narrationsQuery.data
        )
      : [];

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = merged.slice(start, end);

  const totalPages = Math.ceil(merged.length / limit);

  return {
    data: paginated,
    isLoading,
    isError,
    page,
    limit,
    totalPages,
    totalReciters: merged.length
  };
}

function mergeReciterData(
  reciters: Reciter[],
  masahif: Mushaf[],
  narrations: Narration[]
): ReciterFull[] {
  return reciters.map((reciter) => {
    const mushaf = masahif.find((m) => m.id === reciter.id);
    const narration =
      mushaf && narrations.find((n) => n.id === mushaf.narration_id)?.name;

    const totalChapters = mushaf?.available_chapters?.length ?? 0;

    return {
      ...reciter,
      narration: narration ?? 'Unknown narration',
      totalChapters
    };
  });
}
