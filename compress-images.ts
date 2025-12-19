import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

const MAX_SIZE_MB = 10;
const TARGET_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const TARGET_SIZE_BYTES = TARGET_SIZE_MB * 1024 * 1024;

async function compressImage(filePath: string): Promise<void> {
  const stats = fs.statSync(filePath);
  const fileSizeMB = stats.size / (1024 * 1024);

  if (stats.size <= MAX_SIZE_BYTES) {
    console.log(`Skipping ${path.basename(filePath)} (${fileSizeMB.toFixed(2)} MB) - already under ${MAX_SIZE_MB} MB`);
    return;
  }

  console.log(`Compressing ${path.basename(filePath)} (${fileSizeMB.toFixed(2)} MB)...`);

  const ext = path.extname(filePath).toLowerCase();
  const tempPath = filePath + '.tmp';

  try {
    // Start with quality 80 and adjust if needed
    let quality = 80;
    let compressed = false;

    while (quality > 10 && !compressed) {
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(filePath)
          .jpeg({ quality, mozjpeg: true })
          .toFile(tempPath);
      } else if (ext === '.png') {
        await sharp(filePath)
          .png({ quality, compressionLevel: 9 })
          .toFile(tempPath);
      } else {
        console.log(`Unsupported format: ${ext}`);
        return;
      }

      const compressedStats = fs.statSync(tempPath);
      const compressedSizeMB = compressedStats.size / (1024 * 1024);

      if (compressedStats.size <= TARGET_SIZE_BYTES) {
        // Replace original file with compressed version
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        console.log(`✓ Compressed to ${compressedSizeMB.toFixed(2)} MB (quality: ${quality})`);
        compressed = true;
      } else if (quality <= 20) {
        // If we've reached low quality and still too large, use this version anyway
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        console.log(`✓ Compressed to ${compressedSizeMB.toFixed(2)} MB (quality: ${quality}) - best effort`);
        compressed = true;
      } else {
        // Try with lower quality
        fs.unlinkSync(tempPath);
        quality -= 10;
      }
    }
  } catch (error) {
    console.error(`Error compressing ${filePath}:`, error);
    // Clean up temp file if it exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function processFolder(folderPath: string): Promise<void> {
  if (!fs.existsSync(folderPath)) {
    console.error(`Error: Folder not found: ${folderPath}`);
    process.exit(1);
  }

  const files = fs.readdirSync(folderPath);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
  });

  if (imageFiles.length === 0) {
    console.log('No image files found in the folder.');
    return;
  }

  console.log(`Found ${imageFiles.length} image(s) to process.\n`);

  for (const file of imageFiles) {
    const filePath = path.join(folderPath, file);
    await compressImage(filePath);
  }

  console.log('\nDone!');
}

// Get folder path from command line arguments
const folderPath = process.argv[2];

if (!folderPath) {
  console.error('Usage: ts-node compress-images.ts <folder-path>');
  process.exit(1);
}

processFolder(folderPath);
