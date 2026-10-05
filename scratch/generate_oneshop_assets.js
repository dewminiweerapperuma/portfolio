const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

function createBaseSvg(title, subtitle, badgeText, contentSvg, accent = '#6366f1') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" stroke-opacity="0.6"/>
      </pattern>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090d16"/>
        <stop offset="100%" stop-color="#04070d"/>
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#141e33"/>
        <stop offset="100%" stop-color="#0b1120"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="15" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Main Background -->
    <rect width="1200" height="800" fill="url(#bgGrad)"/>
    <rect width="1200" height="800" fill="url(#grid)"/>

    <!-- Outer Window Frame -->
    <rect x="50" y="50" width="1100" height="700" rx="16" fill="url(#panelGrad)" stroke="#334155" stroke-width="1.5"/>

    <!-- Window Topbar -->
    <rect x="50" y="50" width="1100" height="54" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
    <rect x="50" y="80" width="1100" height="24" fill="#0f172a"/>
    <line x1="50" y1="104" x2="1150" y2="104" stroke="#334155" stroke-width="1"/>

    <!-- Window Buttons -->
    <circle cx="85" cy="77" r="7" fill="#ef4444"/>
    <circle cx="110" cy="77" r="7" fill="#f59e0b"/>
    <circle cx="135" cy="77" r="7" fill="#10b981"/>

    <!-- Topbar Breadcrumb & Badge -->
    <text x="170" y="82" font-family="'JetBrains Mono', monospace, sans-serif" font-size="13" font-weight="600" fill="#94a3b8">OneShop PWA // Client Project — Eutech Cybernetic Lanka // Team Cipher5</text>
    <rect x="940" y="66" width="180" height="24" rx="12" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-width="1"/>
    <text x="1030" y="82" font-family="'JetBrains Mono', monospace, sans-serif" font-size="11" font-weight="700" fill="${accent}" text-anchor="middle">${badgeText}</text>

    <!-- Title Header inside window -->
    <g transform="translate(90, 140)">
      <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" fill="#f8fafc">${title}</text>
      <text x="0" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="400" fill="#94a3b8">${subtitle}</text>
    </g>

    <!-- Dynamic Content Area -->
    <g transform="translate(90, 195)">
      ${contentSvg}
    </g>

    <!-- Footer Meta -->
    <line x1="90" y1="710" x2="1110" y2="710" stroke="#1e293b" stroke-width="1"/>
    <text x="90" y="730" font-family="'JetBrains Mono', monospace, sans-serif" font-size="11" fill="#64748b">Tech: Next.js • React • Express • MongoDB • AWS • PayHere.lk • Nodemailer • Jest</text>
    <text x="1110" y="730" font-family="'JetBrains Mono', monospace, sans-serif" font-size="11" fill="#64748b" text-anchor="end">Faculty of IT, University of Moratuwa</text>
  </svg>`;
}

// 1. Dashboard & Unified Sync Screen
const dashboardSvg = `
  <rect width="1020" height="495" rx="12" fill="#090d16" stroke="#1e293b"/>
  
  <!-- KPI Metrics -->
  <g transform="translate(20, 20)">
    <!-- KPI 1 -->
    <rect x="0" y="0" width="230" height="90" rx="8" fill="#111827" stroke="#374151"/>
    <text x="18" y="28" font-family="sans-serif" font-size="12" fill="#9ca3af">UNIFIED CATALOG INVENTORY</text>
    <text x="18" y="60" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700" fill="#f9fafb">1,482 SKUs</text>
    <text x="18" y="80" font-family="sans-serif" font-size="11" fill="#10b981">● Sync Status: Real-Time Active</text>

    <!-- KPI 2 -->
    <rect x="250" y="0" width="230" height="90" rx="8" fill="#111827" stroke="#374151"/>
    <text x="268" y="28" font-family="sans-serif" font-size="12" fill="#9ca3af">IN-STORE POS SALES (TODAY)</text>
    <text x="268" y="60" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700" fill="#38bdf8">LKR 184,500</text>
    <text x="268" y="80" font-family="sans-serif" font-size="11" fill="#38bdf8">42 Terminal Transactions</text>

    <!-- KPI 3 -->
    <rect x="500" y="0" width="230" height="90" rx="8" fill="#111827" stroke="#374151"/>
    <text x="518" y="28" font-family="sans-serif" font-size="12" fill="#9ca3af">ONLINE STORE ORDERS</text>
    <text x="518" y="60" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700" fill="#a855f7">LKR 96,250</text>
    <text x="518" y="80" font-family="sans-serif" font-size="11" fill="#a855f7">18 Dispatched via PayHere</text>

    <!-- KPI 4 -->
    <rect x="750" y="0" width="230" height="90" rx="8" fill="#111827" stroke="#374151"/>
    <text x="768" y="28" font-family="sans-serif" font-size="12" fill="#9ca3af">STOCK SAFETY ALERTS</text>
    <text x="768" y="60" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700" fill="#f59e0b">3 Low Stock</text>
    <text x="768" y="80" font-family="sans-serif" font-size="11" fill="#f59e0b">Auto-reserved for checkout</text>
  </g>

  <!-- Dual Split: In-Store Cashier POS vs E-Commerce Storefront -->
  <g transform="translate(20, 130)">
    <!-- Left Box: POS Terminal Live Stream -->
    <rect x="0" y="0" width="480" height="345" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <rect x="0" y="0" width="480" height="40" rx="10" fill="#1e293b"/>
    <rect x="0" y="25" width="480" height="15" fill="#1e293b"/>
    <text x="20" y="26" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700" fill="#f8fafc">🏪 Cashier POS Terminal (In-Store)</text>
    <rect x="360" y="10" width="105" height="20" rx="10" fill="#10b981" fill-opacity="0.2"/>
    <text x="412" y="24" font-family="monospace" font-size="10" fill="#10b981" text-anchor="middle">ONLINE SYNC</text>

    <g transform="translate(20, 55)" font-family="'JetBrains Mono', monospace" font-size="12" fill="#cbd5e1">
      <text y="20">Item #1: Ceylon Spices 250g  x2   LKR 1,400</text>
      <text y="50">Item #2: Coconut Oil 1L       x1   LKR 950</text>
      <text y="80">Item #3: Basmati Rice 5kg     x1   LKR 2,650</text>
      <line x1="0" y1="100" x2="440" y2="100" stroke="#334155" stroke-dasharray="4"/>
      <text y="125" font-weight="700" fill="#38bdf8">Terminal Total: LKR 5,000  [Paid: Cash]</text>
      <text y="150" font-size="11" fill="#10b981">✓ Stock auto-decremented in MongoDB cluster</text>
      <text y="175" font-size="11" fill="#94a3b8">→ Real-time event pushed to online store catalog</text>

      <rect x="0" y="195" width="440" height="80" rx="6" fill="#1e293b" fill-opacity="0.5"/>
      <text x="15" y="222" font-size="11" fill="#f59e0b">⚡ WebSocket Sync Packet Broadcast:</text>
      <text x="15" y="242" font-size="10" fill="#cbd5e1">{ sku: "SKU-9921", stockRemaining: 14, store: "Main-Colombo" }</text>
      <text x="15" y="260" font-size="10" fill="#10b981">Zero inventory latency across all branches.</text>
    </g>

    <!-- Right Box: Online Storefront & Fulfillment Stream -->
    <rect x="500" y="0" width="480" height="345" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <rect x="500" y="0" width="480" height="40" rx="10" fill="#1e293b"/>
    <rect x="500" y="25" width="480" height="15" fill="#1e293b"/>
    <text x="520" y="26" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700" fill="#f8fafc">🌐 E-Commerce Web Storefront (Next.js)</text>
    <rect x="860" y="10" width="105" height="20" rx="10" fill="#6366f1" fill-opacity="0.2"/>
    <text x="912" y="24" font-family="monospace" font-size="10" fill="#818cf8" text-anchor="middle">PAYHERE.LK</text>

    <g transform="translate(520, 55)" font-family="'JetBrains Mono', monospace" font-size="12" fill="#cbd5e1">
      <text y="20">Order #OS-7712 • Colombo 03 • LKR 8,450</text>
      <text y="40" font-size="11" fill="#a855f7">Customer: dinuka@example.com (Verified JWT)</text>
      <text y="65">Status: [ CONFIRMED ] → Stock Reserved</text>
      
      <line x1="0" y1="85" x2="440" y2="85" stroke="#334155" stroke-dasharray="4"/>
      <text y="110" font-size="11" fill="#f8fafc">Payment: PayHere.lk Visa/Mastercard (Approved)</text>
      <text y="130" font-size="11" fill="#94a3b8">Delivery Zone: Western Province (Flat LKR 350)</text>
      <text y="150" font-size="11" fill="#38bdf8">Tracking Code: TRK-9831-LK (SMS &amp; Email)</text>

      <rect x="0" y="170" width="440" height="105" rx="6" fill="#1e293b" fill-opacity="0.5"/>
      <text x="15" y="195" font-size="11" fill="#10b981">🔒 Fulfillment State Machine:</text>
      <text x="15" y="215" font-size="10" fill="#94a3b8">State: Pending ──▶ Confirmed ──▶ Shipped ──▶ Delivered</text>
      <text x="15" y="235" font-size="10" fill="#cbd5e1">Manager RBAC: Cashier authorized for packing &amp; dispatch.</text>
      <text x="15" y="255" font-size="10" fill="#38bdf8">Customer tracking link generated with live milestone stepper.</text>
    </g>
  </g>
`;

// 2. Auth & Dual-Path Recovery Screen
const authSvg = `
  <rect width="1020" height="495" rx="12" fill="#090d16" stroke="#1e293b"/>
  
  <g transform="translate(30, 30)">
    <!-- Column 1: Auth Architecture -->
    <rect x="0" y="0" width="460" height="435" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <text x="25" y="38" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#38bdf8">Dual-Path Password Reset System</text>
    <text x="25" y="65" font-family="sans-serif" font-size="13" fill="#94a3b8">Tailored for Sri Lankan connectivity conditions &amp; retail staff.</text>

    <!-- Path A: Email Flow -->
    <rect x="25" y="90" width="410" height="150" rx="8" fill="#1e293b" fill-opacity="0.6" stroke="#334155"/>
    <text x="45" y="120" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700" fill="#10b981">Path A: Nodemailer SMTP Verification</text>
    <text x="45" y="145" font-family="sans-serif" font-size="12" fill="#cbd5e1">1. User requests password reset via registered email.</text>
    <text x="45" y="168" font-family="sans-serif" font-size="12" fill="#cbd5e1">2. Crypto-secure 15-minute token generated &amp; hashed.</text>
    <text x="45" y="191" font-family="sans-serif" font-size="12" fill="#cbd5e1">3. Direct branded deep-link sent with one-time validity.</text>
    <text x="45" y="214" font-family="sans-serif" font-size="12" fill="#cbd5e1">4. Bcrypt re-hashes password upon client validation.</text>

    <!-- Path B: Security Questions -->
    <rect x="25" y="260" width="410" height="150" rx="8" fill="#1e293b" fill-opacity="0.6" stroke="#334155"/>
    <text x="45" y="290" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700" fill="#f59e0b">Path B: Security Question Fallback</text>
    <text x="45" y="315" font-family="sans-serif" font-size="12" fill="#cbd5e1">1. Designed for users/retail staff without reliable email access.</text>
    <text x="45" y="338" font-family="sans-serif" font-size="12" fill="#cbd5e1">2. Configured during onboarding with salt-hashed answers.</text>
    <text x="45" y="361" font-family="sans-serif" font-size="12" fill="#cbd5e1">3. Rate-limited challenge prevention against brute force.</text>
    <text x="45" y="384" font-family="sans-serif" font-size="12" fill="#cbd5e1">4. Unlocks instant credential reset with audit log event.</text>
  </g>

  <g transform="translate(520, 30)">
    <!-- Column 2: Data Models & RBAC -->
    <rect x="0" y="0" width="470" height="435" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <text x="25" y="38" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="700" fill="#a855f7">Identity Models &amp; Role Boundaries</text>
    <text x="25" y="65" font-family="sans-serif" font-size="13" fill="#94a3b8">MongoDB Mongoose schema with granular permission checks.</text>

    <rect x="25" y="90" width="420" height="320" rx="8" fill="#050811" stroke="#1e293b"/>
    <g transform="translate(45, 120)" font-family="'JetBrains Mono', monospace" font-size="12" fill="#cbd5e1">
      <text y="0" fill="#f43f5e">// UserSchema (MongoDB / Mongoose)</text>
      <text y="22" fill="#38bdf8">const UserSchema = new Schema({</text>
      <text y="44">  name: { type: String, required: true },</text>
      <text y="66">  email: { type: String, unique: true, index: true },</text>
      <text y="88">  passwordHash: { type: String, select: false },</text>
      <text y="110">  role: {</text>
      <text y="132" fill="#10b981">    type: String,</text>
      <text y="154" fill="#10b981">    enum: ['customer', 'cashier', 'manager', 'admin'],</text>
      <text y="176" fill="#10b981">    default: 'customer'</text>
      <text y="198">  },</text>
      <text y="220">  securityQuestion: { q: String, aHash: String },</text>
      <text y="242">  avatarUrl: { type: String },</text>
      <text y="264" fill="#38bdf8">});</text>
    </g>
  </g>
`;

// 3. Order Lifecycle State Machine
const orderLifecycleSvg = `
  <rect width="1020" height="495" rx="12" fill="#090d16" stroke="#1e293b"/>

  <g transform="translate(30, 30)">
    <text x="0" y="20" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700" fill="#f8fafc">Order State Machine &amp; Automated Stock Reservation</text>
    <text x="0" y="45" font-family="sans-serif" font-size="13" fill="#94a3b8">Guaranteed consistency: prevent overselling across online and POS checkout streams.</text>

    <!-- State Machine Visual Steps -->
    <g transform="translate(10, 80)">
      <!-- Node 1: PENDING -->
      <rect x="0" y="0" width="190" height="120" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="95" y="35" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#f59e0b" text-anchor="middle">1. PENDING</text>
      <text x="95" y="65" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Cart submitted</text>
      <text x="95" y="85" font-family="sans-serif" font-size="11" fill="#f59e0b" text-anchor="middle">Stock Temporarily</text>
      <text x="95" y="102" font-family="sans-serif" font-size="11" fill="#f59e0b" text-anchor="middle">Reserved (15 min)</text>

      <!-- Arrow 1 -->
      <line x1="190" y1="60" x2="250" y2="60" stroke="#6366f1" stroke-width="3" stroke-dasharray="6"/>
      <polygon points="250,55 260,60 250,65" fill="#6366f1"/>

      <!-- Node 2: CONFIRMED -->
      <rect x="260" y="0" width="190" height="120" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <text x="355" y="35" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">2. CONFIRMED</text>
      <text x="355" y="65" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">PayHere payment OK</text>
      <text x="355" y="85" font-family="sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">Stock permanently</text>
      <text x="355" y="102" font-family="sans-serif" font-size="11" fill="#38bdf8" text-anchor="middle">decremented</text>

      <!-- Arrow 2 -->
      <line x1="450" y1="60" x2="510" y2="60" stroke="#6366f1" stroke-width="3"/>
      <polygon points="510,55 520,60 510,65" fill="#6366f1"/>

      <!-- Node 3: SHIPPED -->
      <rect x="520" y="0" width="190" height="120" rx="10" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
      <text x="615" y="35" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#818cf8" text-anchor="middle">3. SHIPPED</text>
      <text x="615" y="65" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Dispatched with courier</text>
      <text x="615" y="85" font-family="sans-serif" font-size="11" fill="#818cf8" text-anchor="middle">Unique tracking #</text>
      <text x="615" y="102" font-family="sans-serif" font-size="11" fill="#818cf8" text-anchor="middle">issued to customer</text>

      <!-- Arrow 3 -->
      <line x1="710" y1="60" x2="770" y2="60" stroke="#6366f1" stroke-width="3"/>
      <polygon points="770,55 780,60 770,65" fill="#6366f1"/>

      <!-- Node 4: DELIVERED -->
      <rect x="780" y="0" width="180" height="120" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <text x="870" y="35" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#10b981" text-anchor="middle">4. DELIVERED</text>
      <text x="870" y="65" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Customer confirmed</text>
      <text x="870" y="85" font-family="sans-serif" font-size="11" fill="#10b981" text-anchor="middle">Transaction archived</text>
      <text x="870" y="102" font-family="sans-serif" font-size="11" fill="#10b981" text-anchor="middle">Audit trail locked</text>
    </g>

    <!-- Fail-safe Rollback Branch -->
    <g transform="translate(10, 230)">
      <rect x="0" y="0" width="950" height="180" rx="10" fill="#0f172a" stroke="#ef4444" stroke-opacity="0.4"/>
      <text x="25" y="32" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#f87171">⚡ Automatic Rollback &amp; Stock Restoration Engine</text>
      
      <g transform="translate(25, 55)" font-family="sans-serif" font-size="12" fill="#cbd5e1">
        <text y="15">• Payment Timeout / Abandonment: If PayHere payment is not settled within 15 minutes, reserved stock is automatically returned to active inventory.</text>
        <text y="40">• Order Cancellation: Cashier or Manager triggers refund → atomic MongoDB transaction increments available store stock.</text>
        <text y="65">• Concurrency Safety: Atomic operators ($inc, optimistic versioning) prevent duplicate checkouts of last-remaining units.</text>
        <text y="90">• Real-Time Cashier Notification: Cashier terminal immediately reflects updated stock levels via polling and socket synchronization.</text>
      </g>
    </g>
  </g>
`;

// 4. Sri Lanka District Delivery Calculator & PayHere
const deliverySvg = `
  <rect width="1020" height="495" rx="12" fill="#090d16" stroke="#1e293b"/>

  <g transform="translate(30, 30)">
    <text x="0" y="20" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700" fill="#f8fafc">Sri Lanka District Delivery Calculation &amp; PayHere Integration</text>
    <text x="0" y="45" font-family="sans-serif" font-size="13" fill="#94a3b8">Granular zone tariffs across 25 administrative districts with dynamic checkout billing.</text>

    <!-- 2 Column Split -->
    <g transform="translate(0, 70)">
      <!-- Left: Delivery Zone Matrix -->
      <rect x="0" y="0" width="460" height="350" rx="10" fill="#0f172a" stroke="#1e293b"/>
      <text x="20" y="30" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#38bdf8">🗺️ DeliveryZone Data Model (MongoDB)</text>
      
      <g transform="translate(20, 55)" font-family="'JetBrains Mono', monospace" font-size="11" fill="#cbd5e1">
        <rect x="0" y="0" width="420" height="35" rx="6" fill="#1e293b"/>
        <text x="15" y="22" font-weight="700" fill="#f8fafc">Zone 1: Western Province (Col, Gam, Kal)</text>
        <text x="350" y="22" fill="#10b981">LKR 350</text>

        <rect x="0" y="45" width="420" height="35" rx="6" fill="#1e293b"/>
        <text x="15" y="67" font-weight="700" fill="#f8fafc">Zone 2: Central &amp; Southern (Kandy, Galle...)</text>
        <text x="350" y="67" fill="#38bdf8">LKR 450</text>

        <rect x="0" y="90" width="420" height="35" rx="6" fill="#1e293b"/>
        <text x="15" y="112" font-weight="700" fill="#f8fafc">Zone 3: North-Western &amp; Sabaragamuwa</text>
        <text x="350" y="112" fill="#38bdf8">LKR 500</text>

        <rect x="0" y="135" width="420" height="35" rx="6" fill="#1e293b"/>
        <text x="15" y="157" font-weight="700" fill="#f8fafc">Zone 4: Northern &amp; Eastern Provinces</text>
        <text x="350" y="157" fill="#f59e0b">LKR 650</text>

        <rect x="0" y="180" width="420" height="95" rx="6" fill="#1e293b" fill-opacity="0.5"/>
        <text x="15" y="202" fill="#f59e0b">// Dynamic Calculator Service</text>
        <text x="15" y="222">const fee = await calculateDelivery(district, totalWeight);</text>
        <text x="15" y="242">order.deliveryFee = fee;</text>
        <text x="15" y="262">order.totalAmount = subtotal + fee;</text>
      </g>

      <!-- Right: PayHere Checkout View -->
      <rect x="490" y="0" width="470" height="350" rx="10" fill="#0f172a" stroke="#1e293b"/>
      <text x="510" y="30" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#a855f7">💳 PayHere.lk Payment Gateway Modal</text>

      <g transform="translate(510, 55)" font-family="sans-serif" font-size="12" fill="#cbd5e1">
        <rect x="0" y="0" width="430" height="70" rx="8" fill="#1e293b" stroke="#334155"/>
        <text x="18" y="25" font-weight="700" fill="#f8fafc">Order Summary (#OS-2026-8819)</text>
        <text x="18" y="45" font-family="monospace" font-size="11" fill="#94a3b8">Subtotal: LKR 12,400  |  Delivery (Kandy): LKR 450</text>
        <text x="18" y="60" font-family="monospace" font-size="12" font-weight="700" fill="#10b981">Grand Total: LKR 12,850</text>

        <g transform="translate(0, 85)">
          <text y="15" font-weight="600" fill="#f8fafc">Supported Sri Lankan Payment Methods:</text>
          <text y="35" font-family="monospace" font-size="11" fill="#38bdf8">✓ Visa &amp; MasterCard (Credit/Debit)</text>
          <text y="55" font-family="monospace" font-size="11" fill="#38bdf8">✓ Genie, Frimi, eZ Cash, mCash</text>
          <text y="75" font-family="monospace" font-size="11" fill="#38bdf8">✓ Internet Banking (Direct Bank Transfer)</text>

          <rect x="0" y="95" width="430" height="85" rx="6" fill="#1e293b" fill-opacity="0.6"/>
          <text x="15" y="120" font-family="monospace" font-size="11" fill="#10b981">🔒 Security &amp; IPN Webhook Verification:</text>
          <text x="15" y="140" font-family="monospace" font-size="10" fill="#94a3b8">PayHere merchant secret MD5 hash checked on backend</text>
          <text x="15" y="160" font-family="monospace" font-size="10" fill="#cbd5e1">prevents order tampering or fake payment callbacks.</text>
        </g>
      </g>
    </g>
  </g>
`;

// 5. Customer Portal & Tracking
const customerPortalSvg = `
  <rect width="1020" height="495" rx="12" fill="#090d16" stroke="#1e293b"/>

  <g transform="translate(30, 30)">
    <text x="0" y="20" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700" fill="#f8fafc">Tabbed Customer Profile &amp; Real-Time Order Tracking</text>
    <text x="0" y="45" font-family="sans-serif" font-size="13" fill="#94a3b8">Full customer identity lifecycle with photo upload, address book, and live milestone updates.</text>

    <!-- Tab Bar -->
    <g transform="translate(0, 70)">
      <rect x="0" y="0" width="130" height="36" rx="6" fill="#6366f1"/>
      <text x="65" y="23" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">📦 My Orders</text>

      <rect x="140" y="0" width="120" height="36" rx="6" fill="#1e293b"/>
      <text x="200" y="23" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">❤️ Wishlist</text>

      <rect x="270" y="0" width="140" height="36" rx="6" fill="#1e293b"/>
      <text x="340" y="23" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">📍 Address Book</text>

      <rect x="420" y="0" width="150" height="36" rx="6" fill="#1e293b"/>
      <text x="495" y="23" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">💳 Payment Cards</text>

      <rect x="580" y="0" width="150" height="36" rx="6" fill="#1e293b"/>
      <text x="655" y="23" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">⚙️ Account Settings</text>
    </g>

    <!-- Active Tab Content: Order Tracking Stepper -->
    <g transform="translate(0, 125)">
      <rect x="0" y="0" width="960" height="295" rx="10" fill="#0f172a" stroke="#1e293b"/>
      
      <g transform="translate(25, 25)">
        <text x="0" y="10" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#f8fafc">Order Tracking #TRK-2026-4921</text>
        <text x="0" y="32" font-family="sans-serif" font-size="12" fill="#94a3b8">Placed on Oct 04, 2026 • Destination: Colombo, Western Province</text>

        <!-- Stepper Graphic -->
        <g transform="translate(10, 60)">
          <!-- Line -->
          <line x1="40" y1="20" x2="840" y2="20" stroke="#334155" stroke-width="4"/>
          <line x1="40" y1="20" x2="570" y2="20" stroke="#10b981" stroke-width="4"/>

          <!-- Step 1 -->
          <circle cx="40" cy="20" r="14" fill="#10b981"/>
          <text x="40" y="25" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">✓</text>
          <text x="40" y="55" font-family="sans-serif" font-size="12" font-weight="600" fill="#f8fafc" text-anchor="middle">Order Placed</text>
          <text x="40" y="72" font-family="monospace" font-size="10" fill="#94a3b8" text-anchor="middle">10:14 AM</text>

          <!-- Step 2 -->
          <circle cx="305" cy="20" r="14" fill="#10b981"/>
          <text x="305" y="25" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">✓</text>
          <text x="305" y="55" font-family="sans-serif" font-size="12" font-weight="600" fill="#f8fafc" text-anchor="middle">Payment Confirmed</text>
          <text x="305" y="72" font-family="monospace" font-size="10" fill="#94a3b8" text-anchor="middle">10:16 AM</text>

          <!-- Step 3 -->
          <circle cx="570" cy="20" r="14" fill="#10b981"/>
          <text x="570" y="25" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">✓</text>
          <text x="570" y="55" font-family="sans-serif" font-size="12" font-weight="600" fill="#10b981" text-anchor="middle">Dispatched / In Transit</text>
          <text x="570" y="72" font-family="monospace" font-size="10" fill="#10b981" text-anchor="middle">02:30 PM (Current)</text>

          <!-- Step 4 -->
          <circle cx="840" cy="20" r="14" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
          <text x="840" y="25" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">4</text>
          <text x="840" y="55" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Delivered</text>
          <text x="840" y="72" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">Estimated Tomorrow</text>
        </g>

        <!-- Customer Summary Detail -->
        <g transform="translate(10, 160)">
          <rect x="0" y="0" width="890" height="65" rx="6" fill="#1e293b" fill-opacity="0.6"/>
          <text x="20" y="25" font-family="sans-serif" font-size="12" font-weight="700" fill="#f8fafc">Courier Partner: Pronto Lanka Express</text>
          <text x="20" y="45" font-family="sans-serif" font-size="11" fill="#cbd5e1">Package assigned to courier hub at Central Mail Exchange. Direct contact: +94 11 234 5678</text>
          <text x="720" y="35" font-family="'JetBrains Mono', monospace" font-size="12" fill="#38bdf8">Receipt PDF 📄</text>
        </g>
      </g>
    </g>
  </g>
`;

// 6. Automated Testing Suite Screen
const testingSuiteSvg = `
  <rect width="1020" height="495" rx="12" fill="#090d16" stroke="#1e293b"/>

  <g transform="translate(30, 30)">
    <text x="0" y="20" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700" fill="#f8fafc">Automated In-Memory Integration Test Suite</text>
    <text x="0" y="45" font-family="sans-serif" font-size="13" fill="#94a3b8">Comprehensive Jest + Supertest suites executed against isolated MongoMemoryServer instances.</text>

    <!-- Terminal Box -->
    <rect x="0" y="65" width="960" height="355" rx="8" fill="#030712" stroke="#1e293b"/>
    <rect x="0" y="65" width="960" height="32" rx="8" fill="#111827"/>
    <circle cx="20" cy="81" r="5" fill="#ef4444"/>
    <circle cx="36" cy="81" r="5" fill="#f59e0b"/>
    <circle cx="52" cy="81" r="5" fill="#10b981"/>
    <text x="75" y="85" font-family="monospace" font-size="11" fill="#9ca3af">bash — jest --runInBand --detectOpenHandles</text>

    <g transform="translate(20, 120)" font-family="'JetBrains Mono', monospace" font-size="11" fill="#f8fafc">
      <text y="0" fill="#10b981">PASS</text><text x="45" y="0">src/tests/auth.test.ts</text>
      <text x="25" y="20" fill="#9ca3af">✓ should register new customer with bcrypt hashed password (142 ms)</text>
      <text x="25" y="38" fill="#9ca3af">✓ should reject login with invalid password (48 ms)</text>
      <text x="25" y="56" fill="#9ca3af">✓ should trigger password reset token via Nodemailer mock (89 ms)</text>
      <text x="25" y="74" fill="#9ca3af">✓ should fallback to security question verification when email fails (62 ms)</text>

      <text y="105" fill="#10b981">PASS</text><text x="45" y="105">src/tests/orders.test.ts</text>
      <text x="25" y="125" fill="#9ca3af">✓ should reserve item stock when order created in PENDING state (110 ms)</text>
      <text x="25" y="143" fill="#9ca3af">✓ should transition PENDING → CONFIRMED upon PayHere payment webhook (95 ms)</text>
      <text x="25" y="161" fill="#9ca3af">✓ should auto-restore stock when order is cancelled before shipping (81 ms)</text>
      <text x="25" y="179" fill="#9ca3af">✓ should enforce manager RBAC for order status override (45 ms)</text>

      <text y="210" fill="#10b981">PASS</text><text x="45" y="210">src/tests/delivery.test.ts</text>
      <text x="25" y="230" fill="#9ca3af">✓ should calculate exact district tariffs across 25 Sri Lankan zones (38 ms)</text>

      <line x1="0" y1="245" x2="920" y2="245" stroke="#1f2937"/>
      <text y="265" fill="#10b981" font-weight="700">Test Suites: 3 passed, 3 total</text>
      <text y="285" fill="#10b981" font-weight="700">Tests:       18 passed, 18 total</text>
      <text y="305" fill="#6b7280">Snapshots:   0 total | Time: 2.148 s | In-Memory MongoDB: Disconnected clean</text>
    </g>
  </g>
`;

const items = [
  {
    filename: 'oneshop-dashboard.svg',
    title: 'OneShop — Unified POS & Online Commerce',
    subtitle: 'Real-time multi-tenant stock synchronization between brick-and-mortar stores & online storefront',
    badge: 'AWS CLOUD SYNC',
    content: dashboardSvg,
    accent: '#38bdf8'
  },
  {
    filename: 'oneshop-auth-security.svg',
    title: 'Authentication & Dual-Path Password Recovery',
    subtitle: 'Nodemailer email verification + security-question fallback with role-based access control (RBAC)',
    badge: 'JWT + BCRYPT',
    content: authSvg,
    accent: '#a855f7'
  },
  {
    filename: 'oneshop-order-lifecycle.svg',
    title: 'Order Lifecycle State Machine',
    subtitle: 'Deterministic state transitions (Pending → Confirmed → Shipped → Delivered) with stock safety rollback',
    badge: 'STATE MACHINE',
    content: orderLifecycleSvg,
    accent: '#10b981'
  },
  {
    filename: 'oneshop-checkout-delivery.svg',
    title: 'Sri Lanka District Delivery Engine & PayHere',
    subtitle: 'Dynamic multi-tier delivery tariff calculation across 25 administrative districts with PayHere gateway',
    badge: 'PAYHERE.LK',
    content: deliverySvg,
    accent: '#f59e0b'
  },
  {
    filename: 'oneshop-customer-portal.svg',
    title: 'Tabbed Customer Account Portal & Order Tracking',
    subtitle: 'Profile management, address book, wishlist, photo upload, and real-time courier milestone stepper',
    badge: 'CUSTOMER UX',
    content: customerPortalSvg,
    accent: '#6366f1'
  },
  {
    filename: 'oneshop-testing-suite.svg',
    title: 'Automated In-Memory Test Suite',
    subtitle: 'Jest & Supertest integration tests verifying auth boundaries, orders, and delivery fee accuracy',
    badge: 'JEST + SUPERTEST',
    content: testingSuiteSvg,
    accent: '#ec4899'
  }
];

items.forEach(item => {
  const fullSvg = createBaseSvg(item.title, item.subtitle, item.badge, item.content, item.accent);
  const outPath = path.join(assetsDir, item.filename);
  fs.writeFileSync(outPath, fullSvg, 'utf8');
  console.log('Generated:', item.filename);
});
