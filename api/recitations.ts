import { getChapters } from './chapters';
import { getReciter } from './reciter';
import { Recitation } from './recitations.types';

export async function getRecitations(reciterHandle: string) {
  const reciter = await getReciter(reciterHandle);

  if (!reciter) return;

  const chapters = await getChapters();

  const recitations: Recitation[] = chapters.map((chapter) => ({
    reciter,
    chapter,
    audioSrc: `https://download.quranicaudio.com/quran/${reciter.handle}/${chapter.id}.mp3`,
    waveformSrc: `https://cdn.jsdelivr.net/gh/aziham/tilawaat-data/reciters/${reciter.handle}/waveforms/${chapter.id}.json`
  }));

  return recitations;
}
