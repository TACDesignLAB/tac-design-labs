import MarkdownBlogRenderer from '~/components/markdown-blog-renderer';

import { getPlaceholderImage } from '~/utils/get-placeholder-image';

import { getBlog } from '~/services/get-blogs';
import { listBlogs } from '~/services/list-blogs';

import BlogHero from '../components/blog-hero';
import MoreBlogs from '../components/more-blogs';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) return {};

  const blog = await getBlog(slug);

  if (!blog) return {};

  const imageUrl = blog.coverImage.url || getPlaceholderImage();

  return {
    title: blog.title,
    description: blog.metaDescription,
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      type: 'article',
      publishedTime: blog.publishedOn,
      images: [
        {
          url: imageUrl,
          width: blog.coverImage.width,
          height: blog.coverImage.height,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;

  if (!slug) return <></>;

  const blog = await getBlog(slug);
  const otherBlogs = await listBlogs({ pageSize: 5 });

  if (!blog) return <></>;

  return (
    <div className="bg-[#EDD7C3] font-primary">
      <BlogHero
        title={blog.title}
        image={blog.coverImage.url || getPlaceholderImage()}
        imageWidth={blog.coverImage.width}
        imageHeight={blog.coverImage.height}
        altText={blog.title}
        author={blog.authorName}
        publishedDate={blog.publishedOn}
      />
      <div className="p-5 md:p-28">
        <MarkdownBlogRenderer content={blog.content} />
      </div>
      <MoreBlogs blogs={otherBlogs ?? []} currentBlogSlug={slug} />
    </div>
  );
}
