import type { Narration } from './narrations.types';
import { fetcher } from './fetch';

export const getNarrations = () =>
  fetcher<Narration[]>('endpoint/narrations.json');

export async function getNarrationName(narrationId: number) {
  const narrations = await getNarrations();

  const narration = narrations.find(
    (narration) => narration.id === narrationId
  );

  return narration?.name || 'Unknown Narration';
}
