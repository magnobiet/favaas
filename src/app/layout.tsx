import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const pageTitle = 'FAVaaS — Favicon as a Service';
const pageDescription =
  'Use qualquer emoji como favicon com uma única linha de HTML.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  openGraph: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="pt-br"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#dd9400" />

        <link rel="icon" href="https://favicon.magnobiet.com/e/🐝" />

        <link rel="manifest" href="/site.webmanifest" />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
