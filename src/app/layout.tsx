import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className="antialiased bg-white text-gray-900 tracking-tight">
        {children}
      </body>
    </html>
  );
}
