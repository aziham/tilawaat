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

export interface Chapter extends ChapterData {
  audioSrc: string;
  waveformSrc: string;
}
