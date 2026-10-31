import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';

//export const findAllPublicPostsCached = cache(
//  async () => await postRepository.findAllPublic(),
//);
export const findAllPublicPostsCached = unstable_cache(
  cache(async () => {
    return await postRepository.findAllPublic();
  }),
  ['posts'],
  {
    tags: ['posts'],
  },
);

//export const findPostBySlugCached = cache(async (slug: string) => {
//  const post = await postRepository
//    .findBySlugPublic(slug)
//    .catch(() => undefined);
//
//  if (!post) notFound();
//
//  return post;
//});
export const findPostBySlugCached = (slug: string) =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);
      if (!post) notFound();
      return post;
    }),
    ['posts'],
    {
      tags: [`post-${slug}`],
    },
  )(slug);

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);
