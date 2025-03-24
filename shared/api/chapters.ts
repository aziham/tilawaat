import fs from 'fs';
import path from 'path';
import type { Chapter } from './chapters.types';

const PATH = 'src/shared/data/chapters.json';

export async function getChapters() {
  const chaptersData: Chapter[] = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), PATH), 'utf8')
  );

  return chaptersData;
}
