import { Reciter } from './reciters.types';
import { Chapter } from './chapters.types';

export interface Recitation {
  reciter: Reciter;
  chapter: Chapter;
  audioSrc: string;
  waveformSrc: string;
}
