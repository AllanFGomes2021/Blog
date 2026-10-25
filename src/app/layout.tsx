import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The blog - Este é um blog com Next.js',
    template: '%s | The Blog',
  },
  description: 'Essa seria a descrição dessa página.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <html lang='pt-BR'>
        <body>
          <Container>
            <Header>The Blog</Header>

            {children}

            <Footer />
          </Container>
        </body>
      </html>
    </>
  );
}
