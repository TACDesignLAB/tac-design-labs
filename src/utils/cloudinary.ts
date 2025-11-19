import cloudinaryMapping from '../cloudinary-mapping.json';

/**
 * Get Cloudinary URL for an asset path
 * @param assetPath - The original asset path (e.g., "assets/images/logo.png")
 * @returns The Cloudinary URL or a placeholder if not found
 */
export function getCloudinaryUrl(assetPath: string): string {
  // Normalize the path by removing leading slashes and src/ prefix
  const normalizedPath = assetPath
    .replace(/^\/+/, '')
    .replace(/^src\//, '')
    .replace(/^~\//, '');

  const url =
    cloudinaryMapping[normalizedPath as keyof typeof cloudinaryMapping];

  if (!url) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(`Cloudinary URL not found for asset: ${assetPath}`);
    }
    return 'https://placehold.co/600x400?text=Image+Not+Found';
  }

  return url;
}

/**
 * Extract public ID from Cloudinary URL
 * @param cloudinaryUrl - Full Cloudinary URL
 * @returns The public ID (e.g., "tacdesign/assets/images/logo")
 */
export function getCloudinaryPublicId(cloudinaryUrl: string): string {
  // Extract public ID from URL like: https://res.cloudinary.com/truzo/image/upload/v1763530505/tacdesign/assets/images/logo.png
  const parts = cloudinaryUrl.split('/upload/');
  if (parts.length < 2) return '';

  const afterUpload = parts[1];
  // Remove version (v123456/) if present
  const withoutVersion = afterUpload?.replace(/^v\d+\//, '') ?? '';
  // Remove file extension
  const publicId = withoutVersion.replace(/\.\w+$/, '');

  return publicId;
}

/**
 * Get Cloudinary public ID for an asset path
 * @param assetPath - The original asset path (e.g., "assets/images/logo.png")
 * @returns The Cloudinary public ID
 */
export function getCloudinaryPublicIdFromPath(assetPath: string): string {
  const url = getCloudinaryUrl(assetPath);
  return getCloudinaryPublicId(url);
}

/**
 * Get multiple Cloudinary URLs for asset paths
 * @param assetPaths - Array of asset paths
 * @returns Array of Cloudinary URLs
 */
export function getCloudinaryUrls(assetPaths: string[]): string[] {
  return assetPaths.map(getCloudinaryUrl);
}

/**
 * Cloudinary asset type for use with Next.js Image component
 */
export interface CloudinaryAsset {
  src: string;
  width?: number;
  height?: number;
}

/**
 * Get Cloudinary asset object for Next.js Image
 * @param assetPath - The original asset path
 * @param width - Optional width
 * @param height - Optional height
 * @returns CloudinaryAsset object
 */
export function getCloudinaryAsset(
  assetPath: string,
  width?: number,
  height?: number,
): CloudinaryAsset {
  return {
    src: getCloudinaryUrl(assetPath),
    width,
    height,
  };
}

/**
 * Cloudinary cloud name
 */
export const CLOUDINARY_CLOUD_NAME = 'truzo';
