'use client';

import { createContext, useContext, useState } from 'react';
import { Recitation } from '@/types';

interface RecitationContextType extends Recitation {
  setRecitation: (recitation: Recitation) => void;
}

const RecitationContext = createContext<RecitationContextType | undefined>(
  undefined
);

function RecitationProvider({ children }: { children: React.ReactNode }) {
  const [recitation, setRecitation] = useState<Recitation | null>(null);

  return (
    <RecitationContext.Provider value={{ ...recitation, setRecitation }}>
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
