import { getAllBlogs } from '~/lib/blogs';

import type { BlogListItem } from '~/lib/blogs';

export type { BlogListItem };

export function listBlogs(args?: {
  /**@defaultValue 1 */
  page?: number;
  /**@defaultValue 25 */
  pageSize?: number;
}): BlogListItem[] | undefined {
  const { page = 1, pageSize = 25 } = args ?? {};

  const all = getAllBlogs();
  if (all.length === 0) return undefined;

  const start = (page - 1) * pageSize;
  const paginated = all.slice(start, start + pageSize);

  return paginated.length > 0 ? paginated : undefined;
}
