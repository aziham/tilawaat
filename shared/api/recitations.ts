import { getChapters } from './chapters';
import { getReciter } from './reciter';
import { Recitation } from './recitations.types';

export async function getRecitations(reciterId: string) {
  const reciter = await getReciter(reciterId);

  if (!reciter) return;

  const chapters = await getChapters();

  const recitations: Recitation[] = chapters.map((chapter) => ({
    reciter,
    chapter,
    audioSrc: `https://download.quranicaudio.com/quran/${reciterId}/${chapter.id}.mp3`,
    waveformSrc: `https://cdn.jsdelivr.net/gh/aziham/tilawaat-data/reciters/${reciterId}/waveforms/${chapter.id}.json`
  }));

  return recitations;
}
