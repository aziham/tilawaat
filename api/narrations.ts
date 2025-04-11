import type { Narration } from './narrations.types';
import { fetcher } from './fetch';

export const getNarrations = () =>
  fetcher<Narration[]>('endpoint/narrations.json');
