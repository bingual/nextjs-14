'use client';

import './globals.scss';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeModeScript } from 'flowbite-react';
import { SessionProvider } from 'next-auth/react';
import HeaderComponent from '@/components/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="ko">
        <head>
          <title>Adora</title>
          <ThemeModeScript />
        </head>
        <body>
          <>
            <main className={'container mx-auto'}>
              <HeaderComponent />
              {children}
            </main>
            <Analytics />
            <SpeedInsights />
          </>
        </body>
      </html>
    </SessionProvider>
  );
}
