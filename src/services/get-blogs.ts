import { getBlogBySlug } from '~/lib/blogs';

import type { Blog } from '~/lib/blogs';

export type { Blog };

export function getBlog(slug: string) {
  return getBlogBySlug(slug);
}
