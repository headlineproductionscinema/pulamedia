import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pula Media | Botswana, Amplified',
  description: 'Premium Digital Out-of-Home advertising in Botswana. Amplifying brands across the nation with strategic locations and dynamic content.',
  keywords: 'DOOH, digital advertising, Botswana, outdoor advertising, digital billboards, Pula Media',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}