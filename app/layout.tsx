import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Providers } from './providers';
import { SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/sidebar';
import { AppHeader } from '@/components/layout/header';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Tilawaat',
  description:
    'Tilawaat is a modern Quran player app that lets you listen to the Holy Quran with ease. Explore Surahs, choose from multiple reciters, and enjoy a seamless, immersive experience.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='#' type='image/x-icon' />
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <AppSidebar />
          <SidebarInset>
            <AppHeader />
            {children}
          </SidebarInset>
        </Providers>
      </body>
    </html>
  );
}
