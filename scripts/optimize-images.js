const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminAvif = require('imagemin-avif');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const path = require('path');
const fs = require('fs');

// Configuration for your project structure
const CONFIG = {
  inputDirs: [
    'public/images',
    'public/logo',
    'public/icon'
  ],
  outputDir: 'public/images/optimized',
  quality: {
    jpeg: 80,
    png: [0.6, 0.8],
    webp: 80,
    avif: 70
  },
  // Images to prioritize (will get higher quality)
  priorityImages: [
    'logo',
    'hero',
    'banner'
  ]
};

// Utility functions
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function isPriorityImage(filename) {
  return CONFIG.priorityImages.some(priority => 
    filename.toLowerCase().includes(priority.toLowerCase())
  );
}

function getQuality(filename, type) {
  const isPriority = isPriorityImage(filename);
  
  switch (type) {
    case 'jpeg':
      return isPriority ? 90 : CONFIG.quality.jpeg;
    case 'webp':
      return isPriority ? 85 : CONFIG.quality.webp;
    case 'avif':
      return isPriority ? 75 : CONFIG.quality.avif;
    default:
      return CONFIG.quality[type];
  }
}

async function optimizeImagesInDirectory(inputDir) {
  if (!fs.existsSync(inputDir)) {
    console.log(`⚠️  Directory ${inputDir} does not exist, skipping...`);
    return;
  }

  console.log(`📁 Processing directory: ${inputDir}`);

  // Create output directories
  const outputBase = CONFIG.outputDir;
  const webpOutput = path.join(outputBase, 'webp');
  const avifOutput = path.join(outputBase, 'avif');
  
  ensureDirectoryExists(outputBase);
  ensureDirectoryExists(webpOutput);
  ensureDirectoryExists(avifOutput);

  try {
    // Optimize JPEG images
    const jpegFiles = await imagemin([`${inputDir}/**/*.{jpg,jpeg,JPG,JPEG}`], {
      destination: outputBase,
      plugins: [
        imageminMozjpeg({
          quality: CONFIG.quality.jpeg,
          progressive: true
        })
      ]
    });

    if (jpegFiles.length > 0) {
      console.log(`✅ Optimized ${jpegFiles.length} JPEG images`);
    }

    // Optimize PNG images
    const pngFiles = await imagemin([`${inputDir}/**/*.{png,PNG}`], {
      destination: outputBase,
      plugins: [
        imageminPngquant({
          quality: CONFIG.quality.png,
          strip: true
        })
      ]
    });

    if (pngFiles.length > 0) {
      console.log(`✅ Optimized ${pngFiles.length} PNG images`);
    }

    // Generate WebP versions
    const webpFiles = await imagemin([`${inputDir}/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}`], {
      destination: webpOutput,
      plugins: [
        imageminWebp({
          quality: CONFIG.quality.webp,
          method: 6 // Best compression
        })
      ]
    });

    if (webpFiles.length > 0) {
      console.log(`✅ Generated ${webpFiles.length} WebP images`);
    }

    // Generate AVIF versions (next-gen format)
    const avifFiles = await imagemin([`${inputDir}/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}`], {
      destination: avifOutput,
      plugins: [
        imageminAvif({
          quality: CONFIG.quality.avif,
          effort: 6 // Best compression
        })
      ]
    });

    if (avifFiles.length > 0) {
      console.log(`✅ Generated ${avifFiles.length} AVIF images`);
    }

  } catch (error) {
    console.error(`❌ Error processing ${inputDir}:`, error.message);
  }
}

async function generateImageManifest() {
  const manifestPath = path.join(CONFIG.outputDir, 'image-manifest.json');
  const manifest = {
    generated: new Date().toISOString(),
    directories: CONFIG.inputDirs,
    formats: ['original', 'webp', 'avif'],
    images: {}
  };

  // Scan optimized images and create manifest
  try {
    const files = fs.readdirSync(CONFIG.outputDir, { recursive: true });
    files.forEach(file => {
      if (typeof file === 'string' && /\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
        const fullPath = path.join(CONFIG.outputDir, file);
        const stats = fs.statSync(fullPath);
        manifest.images[file] = {
          size: stats.size,
          lastModified: stats.mtime
        };
      }
    });

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`📄 Generated image manifest: ${manifestPath}`);
  } catch (error) {
    console.error('❌ Error generating manifest:', error.message);
  }
}

async function optimizeImages() {
  console.log('🖼️  Starting image optimization for Leak Detection App...');
  console.log('📊 Configuration:', {
    inputDirs: CONFIG.inputDirs,
    outputDir: CONFIG.outputDir,
    quality: CONFIG.quality
  });

  const startTime = Date.now();

  // Process each input directory
  for (const inputDir of CONFIG.inputDirs) {
    await optimizeImagesInDirectory(inputDir);
  }

  // Generate manifest file
  await generateImageManifest();

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log(`✅ Image optimization complete! (${duration}s)`);
  console.log('📁 Optimized images are in:', CONFIG.outputDir);
  console.log('💡 Next steps:');
  console.log('   1. Run "pnpm run image-audit" to check file sizes');
  console.log('   2. Update your components to use optimized images');
  console.log('   3. Run "pnpm run build" to build with optimizations');
}

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run optimization
optimizeImages().catch(console.error);