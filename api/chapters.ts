import type { Chapter } from './chapters.types';
import { fetcher } from './fetch';

export const getChapters = () => fetcher<Chapter[]>('endpoint/chapters.json');

export async function getChapterNames(availableChapters: number[]) {
  const chapters = await getChapters();

  const chapterMap = new Map(
    chapters.map((chapter) => [chapter.id, chapter.name])
  );

  const chapterNames = availableChapters.map(
    (chapterNum) => chapterMap.get(chapterNum) || 'Unknown Chapter'
  );

  return chapterNames;
}
