import type { ImageLoaderProps } from 'next/image';

/**
 * Custom image loader for Cloudinary
 * This bypasses Next.js image optimization and uses Cloudinary's built-in optimization
 */
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  // If it's already a Cloudinary URL, add transformation parameters
  if (src.includes('res.cloudinary.com')) {
    // Parse the Cloudinary URL
    const urlParts = src.split('/upload/');
    if (urlParts.length === 2) {
      // Add Cloudinary transformations for width and quality
      const transformations = [];
      if (width) {
        transformations.push(`w_${String(width)}`);
      }
      if (quality) {
        transformations.push(`q_${String(quality)}`);
      }
      // Add automatic format and quality optimizations
      transformations.push('f_auto');

      return `${urlParts[0]}/upload/${transformations.join(',')}/${urlParts[1]}`;
    }
  }

  // For non-Cloudinary URLs, return as-is
  return src;
}
