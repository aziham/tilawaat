import { getReciters } from './reciters';

export async function getReciter(reciterId: string) {
  const reciters = await getReciters();

  const reciter = reciters.find((reciter) => reciter.id === reciterId);

  return reciter;
}
