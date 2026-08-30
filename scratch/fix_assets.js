const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'public', 'assets');

function createSvgPlaceholder(title, subtitle, color = '#38bdf8', bg = '#0f172a') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <rect width="1200" height="800" fill="${bg}"/>
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1"/>
      </pattern>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#grid)"/>
    <rect x="80" y="80" width="1040" height="640" rx="16" fill="url(#grad)" stroke="${color}" stroke-width="2" stroke-opacity="0.4"/>
    
    <circle cx="120" cy="120" r="8" fill="#ef4444"/>
    <circle cx="145" cy="120" r="8" fill="#f59e0b"/>
    <circle cx="170" cy="120" r="8" fill="#10b981"/>
    
    <text x="600" y="380" font-family="system-ui, sans-serif" font-size="44" font-weight="700" fill="#f8fafc" text-anchor="middle">${title}</text>
    <text x="600" y="440" font-family="system-ui, monospace" font-size="22" font-weight="500" fill="${color}" text-anchor="middle">${subtitle}</text>
    <text x="600" y="520" font-family="system-ui, monospace" font-size="16" fill="#64748b" text-anchor="middle">// DEWMINI WEERAPPERUMA PORTFOLIO DEMO</text>
  </svg>`;
}

const svgAssets = [
  // Certifications
  { name: 'cert-web-design.svg', title: 'Web Design Certification', sub: 'University of Moratuwa / Professional Certificate', color: '#e2e8f0' },
  { name: 'cert-java.svg', title: 'Java Programming Certification', sub: 'Object-Oriented Software Engineering', color: '#f97316' },
  { name: 'cert-c.svg', title: 'C Programming & Embedded Systems', sub: 'Hardware & Systems Programming Certificate', color: '#38bdf8' },
  
  // Shop POS
  { name: 'shoppos-dashboard.svg', title: 'ShopPOS — Overview Dashboard', sub: 'Real-time sales telemetry, inventory count & low-stock alerts', color: '#38bdf8' },
  { name: 'shoppos-products.svg', title: 'ShopPOS — Product Catalog', sub: 'Inventory list, barcode tags, unit prices & reorder limits', color: '#818cf8' },
  { name: 'shoppos-analytics.svg', title: 'ShopPOS — Sales Analytics', sub: 'Daily revenue trends, sell-through breakdown & stock charts', color: '#34d399' },
  { name: 'shoppos-restock.svg', title: 'ShopPOS — Restock Management', sub: 'Restock logs, expiry tracking & batch management', color: '#f472b6' },
  { name: 'shoppos-add-product.svg', title: 'ShopPOS — Add Product Listing', sub: 'Barcode code generator, cost/retail margins & alert levels', color: '#fbbf24' },
  { name: 'shoppos-credit-customers.svg', title: 'ShopPOS — Credit Tab Accounts', sub: 'Informal customer tabs, credit limits & payment tracking', color: '#a78bfa' },
  { name: 'shoppos-returns.svg', title: 'ShopPOS — Customer Returns', sub: 'Return processing, inventory restore & write-off logging', color: '#f87171' },
  { name: 'shoppos-receipt.svg', title: 'ShopPOS — Digital Receipt', sub: 'Scan-to-sell transaction receipt & barcode checkout', color: '#38bdf8' },
  { name: 'shoppos-login.svg', title: 'ShopPOS — Authentication', sub: 'Role-based cashier & store owner access portal', color: '#94a3b8' },

  // Air Quality
  { name: 'air-quality-poster.svg', title: 'FIT EXPO 2025 Showcase Poster', sub: 'Indoor Air Quality Monitoring System — Team Tech Titans', color: '#38bdf8' },
  { name: 'team-tech-titans.svg', title: 'Team Tech Titans — FIT EXPO 2025', sub: 'Faculty of Information Technology, University of Moratuwa', color: '#34d399' }
];

// Clean up old fake png/jpg files that contained raw SVG
const oldBadFiles = [
  'cert-web-design.png', 'cert-java.jpg', 'cert-c.jpg',
  'shoppos-dashboard.png', 'shoppos-products.png', 'shoppos-analytics.png',
  'shoppos-restock.png', 'shoppos-add-product.png', 'shoppos-credit-customers.png',
  'shoppos-returns.png', 'shoppos-receipt.png', 'shoppos-login.png',
  'air-quality-poster.jpg', 'team-tech-titans.png'
];

oldBadFiles.forEach(file => {
  const p = path.join(assetsDir, file);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log(`Removed bad file: ${file}`);
  }
});

// Write proper .svg files
svgAssets.forEach(asset => {
  const filePath = path.join(assetsDir, asset.name);
  const svgContent = createSvgPlaceholder(asset.title, asset.sub, asset.color);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created valid SVG asset: ${asset.name}`);
});
