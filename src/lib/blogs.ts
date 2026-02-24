import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

interface BlogFrontmatter {
  title: string;
  slug: string;
  short_description: string;
  meta_description: string;
  cover_image: string;
  cover_image_width?: number;
  cover_image_height?: number;
  author: string;
  published_on: string;
}

export interface BlogListItem {
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  coverImage: {
    url: string;
    width: number;
    height: number;
  };
  authorName: string;
  publishedOn: string;
}

export interface Blog extends BlogListItem {
  content: string;
}

export function getAllBlogs(): BlogListItem[] {
  if (!fs.existsSync(blogsDirectory)) return [];

  const fileNames = fs
    .readdirSync(blogsDirectory)
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'));

  return fileNames
    .map((fileName) => {
      const filePath = path.join(blogsDirectory, fileName);
      const { data } = matter(fs.readFileSync(filePath, 'utf8'));
      const fm = data as BlogFrontmatter;

      return {
        slug: fm.slug,
        title: fm.title,
        shortDescription: fm.short_description,
        metaDescription: fm.meta_description,
        coverImage: {
          url: fm.cover_image,
          width: fm.cover_image_width ?? 1200,
          height: fm.cover_image_height ?? 800,
        },
        authorName: fm.author ?? 'admin',
        publishedOn: fm.published_on,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime(),
    );
}

export function getBlogBySlug(slug: string): Blog | undefined {
  if (!fs.existsSync(blogsDirectory)) return undefined;

  const fileNames = fs
    .readdirSync(blogsDirectory)
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'));

  for (const fileName of fileNames) {
    const filePath = path.join(blogsDirectory, fileName);
    const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));
    const fm = data as BlogFrontmatter;

    if (fm.slug === slug) {
      return {
        slug: fm.slug,
        title: fm.title,
        shortDescription: fm.short_description,
        metaDescription: fm.meta_description,
        coverImage: {
          url: fm.cover_image,
          width: fm.cover_image_width ?? 1200,
          height: fm.cover_image_height ?? 800,
        },
        authorName: fm.author ?? 'admin',
        publishedOn: fm.published_on,
        content,
      };
    }
  }

  return undefined;
}
