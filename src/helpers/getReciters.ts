import type { ReciterData, Reciter } from '@/types';
import fs from 'fs';
import path from 'path';

async function getReciters() {
  const recitersPath = path.join(process.cwd(), 'public/data/reciters.json');
  const recitersData: ReciterData[] = JSON.parse(
    fs.readFileSync(recitersPath, 'utf8')
  );

  const reciters: Reciter[] = recitersData.map((reciter) => ({
    id: reciter.id,
    name: reciter.name,
    photoSrc: `https://cdn.jsdelivr.net/gh/aziham/tilawaat-data/reciters/${reciter.id}/photo.jpg`
  }));

  return reciters;
}

export default getReciters;
