import type { MushafResponse, Recitations } from './recitations.types';
import { fetcher, BASE_URL } from './fetch';
import { getNarrations } from './narrations';
import { getChapters } from './chapters';

async function getMasahif() {
  const masahifData = await fetcher<MushafResponse[]>('endpoint/masahif.json');

  return masahifData;
}

async function getNarrationName(narrationId: number) {
  const narrations = await getNarrations();

  const narration = narrations.find(
    (narration) => narration.id === narrationId
  );

  return narration?.name || 'Unknown Narration';
}

async function getChapterNames(availableChapters: number[]) {
  const chapters = await getChapters();

  const chapterMap = new Map(
    chapters.map((chapter) => [chapter.id, chapter.name])
  );

  const chapterNames = availableChapters.map(
    (chapterNum) => chapterMap.get(chapterNum) || 'Unknown Chapter'
  );

  return chapterNames;
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

  const [narrationName, chapterNames] = await Promise.all([
    getNarrationName(mushaf.narration_id),
    getChapterNames(mushaf.available_chapters)
  ]);

  const recitations: Recitations = {
    narrationName,
    chapterNames,
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
