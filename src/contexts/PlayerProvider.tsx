'use client';

import { createContext, useContext, useEffect, useRef } from 'react';
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<WaveSurfer | null>(null);

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: containerRef,
    url: audioSrc,
    peaks
  });

  useEffect(() => {
    if (!wavesurfer) return;

    // Cleanup previous instance before setting new one
    if (instanceRef.current && instanceRef.current !== wavesurfer) {
      instanceRef.current.destroy();
    }

    instanceRef.current = wavesurfer;

    return () => {
      if (instanceRef.current === wavesurfer) {
        wavesurfer.destroy();
        instanceRef.current = null;
      }
    };
  }, [wavesurfer]);

  const playPause = () => wavesurfer && wavesurfer.playPause();

  return (
    <PlayerContext.Provider value={{ wavesurfer, isPlaying, playPause }}>
      {children}
      <div ref={containerRef} className='hidden' />
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
