import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/shared/styles/globals.css';

import RecitationProvider from '@/shared/stores/recitation-provider';
import PlayerProvider from '@/features/player/stores/player-provider';
import Player from '@/features/player/components';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Tilawaat',
  description:
    'Tilawaat is a modern Quran player app that lets you listen to the Holy Quran with ease. Explore Surahs, choose from multiple reciters, and enjoy a seamless, immersive experience.'
};

function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='#' type='image/x-icon' />
      <body className={`${inter.className} antialiased`}>
        <RecitationProvider>
          <PlayerProvider>
            {children}
            <Player />
          </PlayerProvider>
        </RecitationProvider>
      </body>
    </html>
  );
}

export default RootLayout;
