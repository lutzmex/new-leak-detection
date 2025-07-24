const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  directories: [
    'public/images',
    'public/logo', 
    'public/icon',
    'public/images/optimized'
  ],
  limits: {
    hero: 800 * 1024,      // 800KB for hero images
    logo: 100 * 1024,      // 100KB for logos
    icon: 50 * 1024,       // 50KB for icons  
    general: 500 * 1024,   // 500KB for general images
    thumbnail: 100 * 1024  // 100KB for thumbnails
  },
  extensions: ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg']
};

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getImageCategory(filename) {
  const name = filename.toLowerCase();
  if (name.includes('hero') || name.includes('banner')) return 'hero';
  if (name.includes('logo')) return 'logo';
  if (name.includes('icon')) return 'icon';
  if (name.includes('thumb') || name.includes('thumbnail')) return 'thumbnail';
  return 'general';
}

function getSizeLimit(filename) {
  const category = getImageCategory(filename);
  return CONFIG.limits[category];
}

function scanDirectory(dir) {
  const results = [];
  
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory ${dir} does not exist, skipping...`);
    return results;
  }

  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        // Recursively scan subdirectories
        results.push(...scanDirectory(fullPath));
      } else if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        
        if (CONFIG.extensions.includes(ext)) {
          const stats = fs.statSync(fullPath);
          const relativePath = path.relative(process.cwd(), fullPath);
          const sizeLimit = getSizeLimit(item.name);
          const category = getImageCategory(item.name);
          
          results.push({
            path: relativePath,
            filename: item.name,
            size: stats.size,
            sizeFormatted: formatFileSize(stats.size),
            category,
            sizeLimit,
            isOverSize: stats.size > sizeLimit,
            lastModified: stats.mtime
          });
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error scanning ${dir}:`, error.message);
  }
  
  return results;
}

function generateReport(images) {
  const report = {
    totalImages: images.length,
    totalSize: images.reduce((sum, img) => sum + img.size, 0),
    categories: {},
    oversizedImages: images.filter(img => img.isOverSize),
    recommendations: []
  };

  // Group by category
  images.forEach(img => {
    if (!report.categories[img.category]) {
      report.categories[img.category] = {
        count: 0,
        totalSize: 0,
        averageSize: 0,
        oversized: 0
      };
    }
    
    const cat = report.categories[img.category];
    cat.count++;
    cat.totalSize += img.size;
    if (img.isOverSize) cat.oversized++;
  });

  // Calculate averages
  Object.keys(report.categories).forEach(category => {
    const cat = report.categories[category];
    cat.averageSize = Math.round(cat.totalSize / cat.count);
    cat.totalSizeFormatted = formatFileSize(cat.totalSize);
    cat.averageSizeFormatted = formatFileSize(cat.averageSize);
  });

  return report;
}

function printSummary(report) {
  console.log('\n📊 IMAGE AUDIT SUMMARY');
  console.log('═'.repeat(50));
  console.log(`📁 Total Images: ${report.totalImages}`);
  console.log(`💾 Total Size: ${formatFileSize(report.totalSize)}`);
  console.log(`⚠️  Oversized Images: ${report.oversizedImages.length}`);

  console.log('\n📋 BY CATEGORY:');
  Object.entries(report.categories).forEach(([category, data]) => {
    const emoji = {
      hero: '🖼️ ',
      logo: '🏷️ ',
      icon: '🔷',
      thumbnail: '🖼️ ',
      general: '📷'
    }[category] || '📁';
    
    console.log(`${emoji} ${category.toUpperCase()}:`);
    console.log(`   Count: ${data.count}`);
    console.log(`   Total Size: ${data.totalSizeFormatted}`);
    console.log(`   Average Size: ${data.averageSizeFormatted}`);
    if (data.oversized > 0) {
      console.log(`   ⚠️  Oversized: ${data.oversized}`);
    }
  });
}

function printOversizedImages(oversizedImages) {
  if (oversizedImages.length === 0) {
    console.log('\n✅ All images are within size limits!');
    return;
  }

  console.log('\n⚠️  OVERSIZED IMAGES:');
  console.log('═'.repeat(70));

  oversizedImages
    .sort((a, b) => b.size - a.size) // Sort by size (largest first)
    .forEach((img, index) => {
      const limitFormatted = formatFileSize(img.sizeLimit);
      const overBy = formatFileSize(img.size - img.sizeLimit);
      
      console.log(`${index + 1}. ${img.filename}`);
      console.log(`   📁 Path: ${img.path}`);
      console.log(`   📏 Size: ${img.sizeFormatted} (limit: ${limitFormatted})`);
      console.log(`   📈 Over by: ${overBy}`);
      console.log(`   🏷️  Category: ${img.category}`);
      console.log('');
    });
}

function printRecommendations(report) {
  console.log('\n💡 OPTIMIZATION RECOMMENDATIONS:');
  console.log('═'.repeat(50));

  if (report.oversizedImages.length > 0) {
    console.log('🔧 IMMEDIATE ACTIONS:');
    console.log('   • Run "pnpm run optimize-images" to compress images');
    console.log('   • Consider using WebP/AVIF formats for better compression');
    console.log('   • Resize images to appropriate dimensions before upload');
  }

  // Category-specific recommendations
  Object.entries(report.categories).forEach(([category, data]) => {
    if (data.oversized > 0) {
      switch (category) {
        case 'hero':
          console.log(`🖼️  HERO IMAGES: Consider using responsive images with srcset`);
          break;
        case 'logo':
          console.log(`🏷️  LOGOS: Use SVG format when possible for scalability`);
          break;
        case 'icon':
          console.log(`🔷 ICONS: Consider using icon fonts or SVG sprites`);
          break;
        default:
          console.log(`📷 ${category.toUpperCase()}: Apply compression and modern formats`);
      }
    }
  });

  console.log('\n🚀 PERFORMANCE TIPS:');
  console.log('   • Use Next.js Image component with proper sizing');
  console.log('   • Implement lazy loading for below-fold images');
  console.log('   • Add proper alt text for SEO and accessibility');
  console.log('   • Consider using a CDN for image delivery');
}

function auditImages() {
  console.log('🔍 Starting image audit for Leak Detection App...');
  console.log('📁 Scanning directories:', CONFIG.directories);

  let allImages = [];

  // Scan all directories
  CONFIG.directories.forEach(dir => {
    console.log(`\n📂 Scanning: ${dir}`);
    const images = scanDirectory(dir);
    allImages.push(...images);
    console.log(`   Found ${images.length} images`);
  });

  if (allImages.length === 0) {
    console.log('\n❌ No images found in specified directories');
    return;
  }

  // Generate and print report
  const report = generateReport(allImages);
  
  printSummary(report);
  printOversizedImages(report.oversizedImages);
  printRecommendations(report);

  // Save detailed report
  const reportPath = 'image-audit-report.json';
  const detailedReport = {
    ...report,
    images: allImages,
    generatedAt: new Date().toISOString()
  };
  
  try {
    fs.writeFileSync(reportPath, JSON.stringify(detailedReport, null, 2));
    console.log(`\n📄 Detailed report saved: ${reportPath}`);
  } catch (error) {
    console.error('❌ Error saving report:', error.message);
  }

  // Exit with error code if there are oversized images
  if (report.oversizedImages.length > 0) {
    console.log('\n⚠️  Some images exceed size limits. Run optimization to fix.');
    process.exit(1);
  } else {
    console.log('\n✅ All images pass the audit!');
  }
}

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run audit
auditImages();