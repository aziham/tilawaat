import type { Reciter } from '@/api/reciters.types';

export interface ReciterFull extends Reciter {
  narration: string;
  totalChapters: number;
}
