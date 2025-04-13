export interface MushafResponse {
  id: number;
  narration_id: number;
  server: string;
  available_chapters: number[];
}

export interface Recitations {
  audioSources: string[];
  waveformSources: string[];
}
