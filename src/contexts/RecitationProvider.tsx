'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Recitation } from '@/types';
import fetchPeaks from '@/helpers/fetchPeaks';

export type Peaks = (Float32Array<ArrayBufferLike> | number[])[] | undefined;

interface RecitationContextType extends Recitation {
  setRecitation: (recitation: Recitation) => void;
  peaks: Peaks;
}

const RecitationContext = createContext<RecitationContextType | undefined>(
  undefined
);

function RecitationProvider({ children }: { children: React.ReactNode }) {
  const [recitation, setRecitation] = useState<Recitation | null>(null);
  const [peaks, setPeaks] = useState<Peaks>(undefined);

  useEffect(() => {
    if (!recitation?.waveformSrc) {
      setPeaks(undefined);
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      const peaks = await fetchPeaks(recitation.waveformSrc!, signal);
      if (peaks) setPeaks(peaks);
    })();

    return () => controller.abort();
  }, [recitation?.waveformSrc]);

  return (
    <RecitationContext.Provider value={{ ...recitation, setRecitation, peaks }}>
      {children}
    </RecitationContext.Provider>
  );
}

export function useRecitation() {
  const context = useContext(RecitationContext);

  if (!context)
    throw new Error('useRecitation must be used within a RecitationProvider');

  return context;
}

export default RecitationProvider;
