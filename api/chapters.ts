import type { Chapter } from './chapters.types';
import { fetcher } from './fetch';

export const getChapters = () => fetcher<Chapter[]>('endpoint/chapters.json');
