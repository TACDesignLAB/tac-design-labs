import { markdownToHtml } from '~/lib/markdown';

interface MarkdownBlogRendererProps {
  content: string;
}

export default async function MarkdownBlogRenderer({
  content,
}: MarkdownBlogRendererProps) {
  const html = await markdownToHtml(content);

  return (
    <div
      className="prose prose-blog max-w-none md:prose-2xl"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
