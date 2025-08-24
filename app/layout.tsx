import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'hendrikwichern.de',
  description: 'Hendrik Wichern | Product Engineer',
};

export default function RootLayout({
  children
}: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='max-w-screen-xl mx-auto my-0.5'>
          {children}
        </div>
      </body>
    </html>
  );
}
