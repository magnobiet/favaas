import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />

      <body className="antialiased bg-white text-gray-900 tracking-tight">
        {children}
      </body>
    </html>
  );
}
