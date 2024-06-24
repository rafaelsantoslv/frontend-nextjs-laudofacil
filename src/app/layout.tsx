import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LaudoFácil',
  description: 'Desenvolvimento',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}
