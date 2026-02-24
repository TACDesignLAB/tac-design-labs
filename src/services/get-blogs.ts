import { getBlogBySlug } from '~/lib/blogs';

import type { Blog } from '~/lib/blogs';

export type { Blog };

export async function getBlog(slug: string): Promise<Blog | undefined> {
  return getBlogBySlug(slug);
}
