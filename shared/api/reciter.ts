import { getReciters } from './reciters';

export async function getReciter(handle: string) {
  const reciters = await getReciters();

  const reciter = reciters.find((reciter) => reciter.handle === handle);

  return reciter;
}
