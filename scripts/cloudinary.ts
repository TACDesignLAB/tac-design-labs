/* eslint-disable eslint-comments/require-description */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';
import { v2 as cloudinary } from 'cloudinary';

import 'dotenv/config';

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.CLOUDINARY_API_SECRET;
console.log('CLOUDINARY CONFIG', cloud_name, api_key, api_secret);
// Configure Cloudinary
cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

interface UploadResult {
  localPath: string;
  cloudinaryUrl: string;
  publicId: string;
}

async function getAllImageFiles(
  dir: string,
  baseDir: string = dir,
): Promise<string[]> {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getAllImageFiles(fullPath, baseDir)));
    } else if (
      entry.isFile() &&
      /\.(?:jpg|jpeg|png|gif|webp|svg)$/i.test(entry.name)
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function uploadImageWithPath(
  filePath: string,
  baseDir: string,
  folderPrefix = '',
): Promise<UploadResult> {
  // Get relative path from base directory
  const relativePath = path.relative(baseDir, filePath);

  // Remove file extension and use as public_id to preserve path structure
  const publicId = path
    .join(folderPrefix, relativePath.replace(path.extname(relativePath), ''))
    .replace(/\\/g, '/'); // Normalize path separators for Cloudinary

  console.log(`Uploading: ${relativePath} -> ${publicId}`);

  const result = await cloudinary.uploader.upload(filePath, {
    public_id: publicId,
    overwrite: false, // Set to true if you want to overwrite existing files
    resource_type: 'image',
  });

  return {
    localPath: relativePath,
    cloudinaryUrl: result.secure_url,
    publicId: result.public_id,
  };
}

async function uploadFolder(
  folderPath: string,
  cloudinaryFolderPrefix = '',
): Promise<UploadResult[]> {
  const absolutePath = path.resolve(folderPath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Folder not found: ${absolutePath}`);
  }

  console.log(`Scanning folder: ${absolutePath}`);
  const imageFiles = await getAllImageFiles(absolutePath);
  console.log(`Found ${imageFiles.length} images to upload\n`);

  const results: UploadResult[] = [];

  for (const filePath of imageFiles) {
    const result = await uploadImageWithPath(
      filePath,
      absolutePath,
      cloudinaryFolderPrefix,
    );
    results.push(result);

    // Add a small delay to avoid rate limiting
    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  }

  return results;
}

// Main execution
async function main() {
  const folderToUpload = process.argv[2] || './public';
  const cloudinaryFolder = process.argv[3] || 'tacdesign';

  console.log('Starting upload...\n');

  // Check for files larger than 10MB before uploading
  const absolutePath = path.resolve(folderToUpload);
  console.log(`Scanning folder: ${absolutePath}`);
  const imageFiles = await getAllImageFiles(absolutePath);
  console.log(`Found ${imageFiles.length} images to scan\n`);

  const maxSize = 10485760; // 10MB in bytes
  const largeFiles: Array<{ path: string; size: number }> = [];

  for (const filePath of imageFiles) {
    const stats = fs.statSync(filePath);
    if (stats.size > maxSize) {
      const relativePath = path.relative(absolutePath, filePath);
      largeFiles.push({ path: relativePath, size: stats.size });
    }
  }

  if (largeFiles.length > 0) {
    console.error('\n❌ ERROR: Found files larger than 10MB limit:\n');
    for (const file of largeFiles) {
      const sizeMB = (file.size / 1024 / 1024).toFixed(2);
      console.error(`  - ${file.path} (${sizeMB} MB)`);
    }
    console.error('\nPlease compress or remove these files before uploading.');
    console.error('Cloudinary free tier maximum file size: 10MB\n');
    process.exit(1);
  }

  console.log('✓ All files are within size limits\n');
  const results = await uploadFolder(folderToUpload, cloudinaryFolder);

  // Save mapping to JSON file
  const mapping = results.reduce<Record<string, string>>((acc, r) => {
    acc[r.localPath] = r.cloudinaryUrl;
    return acc;
  }, {});

  fs.writeFileSync('cloudinary-mapping.json', JSON.stringify(mapping, null, 2));
  console.log('\nURL mapping saved to cloudinary-mapping.json');
}

main().catch((e: unknown) => {
  console.error('failed: ', e);
});
