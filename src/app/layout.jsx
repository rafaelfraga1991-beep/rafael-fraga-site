import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
  title:       'Rafael Fraga — Technology Executive | Digital Products | SaaS | Innovation',
  description: 'Technology and digital products executive with over 15 years leading SaaS, cloud and digital transformation.',
  openGraph: {
    title:       'Rafael Fraga — Technology Executive',
    description: 'Technology and digital products executive with over 15 years leading SaaS, cloud and digital transformation.',
    type:        'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
