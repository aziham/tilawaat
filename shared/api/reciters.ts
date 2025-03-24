import fs from 'fs';
import path from 'path';
import type { Reciter } from './reciters.types';

const PATH = 'src/shared/data/reciters.json';

export async function getReciters() {
  const recitersData: Reciter[] = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), PATH), 'utf8')
  );

  const reciters: Reciter[] = recitersData.map((reciter) => ({
    id: reciter.id,
    name: reciter.name,
    photoSrc: `https://cdn.jsdelivr.net/gh/aziham/tilawaat-data/reciters/${reciter.id}/photo.jpg`
  }));

  return reciters;
}
