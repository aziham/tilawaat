import { NextResponse } from 'next/server';
import type { ReciterData, Reciter } from '@/types';
import fs from 'fs';
import path from 'path';

const recitersPath = path.join(process.cwd(), 'public/data/reciters.json');
const recitersData: ReciterData[] = JSON.parse(
  fs.readFileSync(recitersPath, 'utf8')
);

export async function GET() {
  const reciters: Reciter[] = recitersData.map((reciter) => ({
    id: reciter.id,
    name: reciter.name,
    photoSrc: `https://cdn.jsdelivr.net/gh/aziham/tilawaat-data/reciters/${reciter.id}/photo.jpg`
  }));

  return NextResponse.json(reciters);
}
