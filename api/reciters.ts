import type { ReciterResponse, Reciter } from './reciters.types';
import { fetcher, BASE_URL } from './fetch';

export async function getReciters() {
  const recitersData = await fetcher<ReciterResponse[]>(
    'endpoint/reciters.json'
  );

  const reciters: Reciter[] = recitersData.map((reciter) => ({
    ...reciter,
    photoSrc: `${BASE_URL}/data/reciters/${reciter.id}/photo.jpg`
  }));

  return reciters;
}

export async function getReciter(id: number) {
  const reciters = await getReciters();

  const reciter = reciters.find((reciter) => reciter.id === id);

  return reciter;
}
