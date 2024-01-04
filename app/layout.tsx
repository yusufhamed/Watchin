import type { Metadata } from 'next'
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'trakt.tv',
  description: 'Discover and share , movies, tv shows and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white dark:bg-[#1A1C29]'>
        
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Providers>
            <Header />
            {children}
          </Providers>
          
        </ThemeProvider>
        
        </body>
    </html>
  );
}
