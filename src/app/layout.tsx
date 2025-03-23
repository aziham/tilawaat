import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';

import RecitationProvider from '@/contexts/RecitationProvider';
import PlayerProvider from '@/contexts/PlayerProvider';
import Player from '@/components/Player';

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
