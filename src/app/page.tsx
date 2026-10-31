import { Suspense } from 'react';
import { Container } from '@/components/Container';
import { PostFeatured } from '@/components/PostFeatured';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';

//export const dynamic = 'force-static';

export default async function HomePage() {
  return (
    <>
      <Container>
        <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
          <PostFeatured />
          <PostsList />
        </Suspense>
      </Container>
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
