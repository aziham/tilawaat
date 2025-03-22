import type {
  ReciterData,
  ChapterData,
  Reciter,
  Chapter,
  ReciterProfile
} from '@/types';
import fs from 'fs';
import path from 'path';

async function getReciterProfile(
  reciterId: string
): Promise<ReciterProfile | null> {
  const recitersPath = path.join(process.cwd(), 'public/data/reciters.json');
  const chaptersPath = path.join(process.cwd(), 'public/data/chapters.json');

  const recitersData: ReciterData[] = JSON.parse(
    fs.readFileSync(recitersPath, 'utf8')
  );
  const chaptersData: ChapterData[] = JSON.parse(
    fs.readFileSync(chaptersPath, 'utf8')
  );

  const reciterData = recitersData.find((r: ReciterData) => r.id === reciterId);

  if (!reciterData) return null;

  const reciter: Reciter = {
    id: reciterId,
    name: reciterData.name,
    photoSrc: `https://cdn.jsdelivr.net/gh/aziham/tilawaat-data/reciters/${reciterId}/photo.jpg`
  };

  const chapters = chaptersData.map(
    (chapter: ChapterData): Chapter => ({
      id: chapter.id.replace(/^0/, ''),
      name: chapter.name,
      audioSrc: `https://download.quranicaudio.com/quran/${reciterId}/${chapter.id}.mp3`,
      waveformSrc: `https://cdn.jsdelivr.net/gh/aziham/tilawaat-data/reciters/${reciterId}/waveforms/${chapter.id}.json`
    })
  );

  return {
    reciter,
    chapters
  };
}

export default getReciterProfile;
