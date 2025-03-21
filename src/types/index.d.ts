export interface ReciterData {
  id: string;
  name: string;
}

export interface ChapterData {
  id: string;
  name: string;
}

export interface Reciter extends ReciterData {
  photoSrc: string;
}

export interface Recitation extends ChapterData {
  audioSrc: string;
  waveformSrc: string;
}

export interface ReciterProfile {
  reciter: Reciter;
  recitations: Recitation[];
}
