const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createImageSizes() {
  const inputFile = 'public/images/discount-leak-detection.webp';
  const outputDir = 'public/images/sizes';
  
  // Check if input file exists
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    return;
  }
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created directory: ${outputDir}`);
  }

  // Define sizes for different devices
  const sizes = [
    { width: 400, suffix: 'mobile', quality: 70 },   // ~10-15KB
    { width: 640, suffix: 'tablet', quality: 75 },   // ~25-35KB  
    { width: 828, suffix: 'desktop', quality: 80 },  // ~50-65KB
  ];

  console.log('📸 Creating optimized image sizes...');

  for (const size of sizes) {
    try {
      const outputFile = `${outputDir}/discount-leak-detection-${size.suffix}.webp`;
      
      await sharp(inputFile)
        .resize(size.width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: size.quality })
        .toFile(outputFile);
        
      const stats = fs.statSync(outputFile);
      console.log(`✅ ${size.suffix}: ${size.width}px - ${(stats.size / 1024).toFixed(1)}KB`);
    } catch (error) {
      console.error(`❌ Error creating ${size.suffix}:`, error.message);
    }
  }
  
  console.log('🎉 Image optimization complete!');
  console.log('📂 Files created in:', outputDir);
}

createImageSizes().catch(console.error);