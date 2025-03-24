import { Reciter } from './reciters.types';
import { Chapter } from './chapters.types';

export type Recitation = {
  reciter: Reciter;
  chapter: Chapter;
  audioSrc: string;
  waveformSrc: string;
};
