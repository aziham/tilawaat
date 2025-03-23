'use client';

import { createContext, useContext, useRef } from 'react';
import { useWavesurfer } from '@wavesurfer/react';
import { useRecitation } from '@/contexts/RecitationProvider';
import WaveSurfer from 'wavesurfer.js';

type PlayerContextType = {
  wavesurfer: WaveSurfer | null;
  isPlaying: boolean;
  playPause: () => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

function PlayerProvider({ children }: { children: React.ReactNode }) {
  const { audioSrc, peaks } = useRecitation();

  const wavesurferRef = useRef<HTMLDivElement | null>(null);

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: wavesurferRef,
    url: audioSrc,
    peaks
  });

  const playPause = () => wavesurfer && wavesurfer.playPause();

  return (
    <PlayerContext.Provider value={{ wavesurfer, isPlaying, playPause }}>
      {children}
      <div ref={wavesurferRef} className='hidden' />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);

  if (!context)
    throw new Error('usePlayer must be used within a PlayerProvider');

  return context;
}

export default PlayerProvider;
