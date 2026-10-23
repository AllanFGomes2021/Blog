import { Header } from '@/components/Header';

export default async function HomePage() {
  return (
    <>
      <Header>Body</Header>
    </>
  );
}

//
// page.tsx (server) -> menu.tsx (server) -> link (client)
// Rotas
// index.html = page.tsx
// app/page.tsx -> /
// app/About/page.tsx -> /About
//
