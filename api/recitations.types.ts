export interface Mushaf {
  id: number;
  narration_id: number;
  server: string;
  available_chapters: number[];
}

export interface Recitations {
  audioSources: string[];
  waveformSources: string[];
}

export interface FeaturedRecitation {
  id: number;
  reciter: {
    name: string;
    photo_src: string;
  };
  chapter_name: string;
  audio_src: string;
  waveform_src: string;
}
