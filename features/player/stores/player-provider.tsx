'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type WaveSurfer from 'wavesurfer.js';
import { useRecitation, type Peaks } from '@/stores/recitation-provider';
import { useWavesurfer } from '@wavesurfer/react';
import formatTime from '@/features/player/utils/format-time';

type PlayerContextType = {
  media: HTMLMediaElement | null;
  peaks: Peaks;
  isPlaying: boolean;
  currentTime: string;
  duration: string;
  playPause: () => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

function PlayerProvider({ children }: { children: React.ReactNode }) {
  const { audioSrc, peaks } = useRecitation();

  const [media, setMedia] = useState<HTMLMediaElement | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('00:00');
  const [duration, setDuration] = useState<string>('00:00');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<WaveSurfer | null>(null);

  const { wavesurfer, isPlaying, isReady } = useWavesurfer({
    container: containerRef,
    url: audioSrc,
    peaks
  });

  useEffect(() => {
    if (!wavesurfer || !isReady) return;

    setDuration(formatTime(wavesurfer.getDuration()));

    setMedia(wavesurfer.getMediaElement());

    const onAudioProcess = () => {
      const currentTime = wavesurfer.getCurrentTime();
      setCurrentTime(formatTime(currentTime));
    };

    wavesurfer.on('audioprocess', onAudioProcess);

    return () => {
      wavesurfer.un('audioprocess', onAudioProcess);
    };
  }, [wavesurfer, isReady]);

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

  const playPause = () => wavesurfer?.playPause();

  return (
    <PlayerContext.Provider
      value={{ media, peaks, isPlaying, currentTime, duration, playPause }}
    >
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
