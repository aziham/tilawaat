import fs from 'fs';
import path from 'path';
import type { Reciter } from './reciters.types';

const PATH = 'src/shared/data/reciters.json';

export async function getReciters() {
  const recitersData: Reciter[] = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), PATH), 'utf8')
  );

  const reciters: Reciter[] = recitersData.map((reciter) => ({
    handle: reciter.handle,
    name: reciter.name,
    photoSrc: `https://cdn.jsdelivr.net/gh/aziham/tilawaat-data/reciters/${reciter.handle}/photo.jpg`
  }));

  return reciters;
}

export async function getReciter(handle: string) {
  const reciters = await getReciters();

  const reciter = reciters.find((reciter) => reciter.handle === handle);

  return reciter;
}
