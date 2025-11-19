const sharp = require('sharp');
const fs = require('fs');

const filesToCompress = [
  'public/assets/images/blog-images/blog-post-4.jpg',
  'public/assets/images/shire.jpg',
  'public/assets/images/udupi-service.jpeg',
  'public/assets/images/workshop-brick-1.jpeg',
];

async function compressImage(inputPath) {
  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '-compressed.$1');

  try {
    console.log(`\n📁 Processing: ${inputPath}`);
    const originalSize = fs.statSync(inputPath).size;
    console.log(`Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

    // Determine output format based on input
    const isJpeg = /\.(jpg|jpeg)$/i.test(inputPath);

    // Compress with quality reduction and resize if needed
    let pipeline = sharp(inputPath)
      .resize(metadata.width > 2000 ? 2000 : undefined, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });

    if (isJpeg) {
      pipeline = pipeline.jpeg({
        quality: 80,
        progressive: true,
      });
    } else {
      pipeline = pipeline.png({
        quality: 70,
        compressionLevel: 9,
        palette: true,
      });
    }

    await pipeline.toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    console.log(`Compressed size: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(
      `Reduction: ${((1 - newSize / originalSize) * 100).toFixed(2)}%`,
    );

    // Replace original with compressed
    fs.renameSync(outputPath, inputPath);
    console.log('✅ Original file overwritten with compressed version');
  } catch (error) {
    console.error(`❌ Error compressing ${inputPath}:`, error);
    throw error;
  }
}

async function compressAll() {
  console.log(`Starting compression of ${filesToCompress.length} files...\n`);

  for (const file of filesToCompress) {
    await compressImage(file);
  }

  console.log('\n🎉 All files compressed successfully!');
}

compressAll();
