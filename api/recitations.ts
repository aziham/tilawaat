import type {
  Mushaf,
  Recitations,
  FeaturedRecitation
} from './recitations.types';
import { fetcher, BASE_URL } from './fetch';

async function getMasahif() {
  const masahifData = await fetcher<Mushaf[]>('endpoint/masahif.json');

  return masahifData;
}

function generateAudioSources(serverUrl: string, availableChapters: number[]) {
  const audioSources = availableChapters.map(
    (chapterNum) => `${serverUrl}/${chapterNum.toString().padStart(3, '0')}.mp3`
  );

  return audioSources;
}

function generateWaveformSources(
  availableChapters: number[],
  mushafId: number
) {
  const waveformSources = availableChapters.map(
    (chapterNum) =>
      `${BASE_URL}/data/recitations/${mushafId}/waveforms/${chapterNum
        .toString()
        .padStart(3, '0')}.json`
  );

  return waveformSources;
}

export async function getRecitations(reciterId: number) {
  const masahif = await getMasahif();

  const mushaf = masahif.find((mushaf) => mushaf.id === reciterId);

  if (!mushaf) throw new Error(`Mushaf with id ${reciterId} not found`);

  const recitations: Recitations = {
    audioSources: generateAudioSources(
      mushaf.server,
      mushaf.available_chapters
    ),
    waveformSources: generateWaveformSources(
      mushaf.available_chapters,
      mushaf.id
    )
  };

  return recitations;
}

export const getFeaturedRecitations = () =>
  fetcher<FeaturedRecitation[]>('endpoint/featured-recitations.json');
