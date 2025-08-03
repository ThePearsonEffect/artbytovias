# 🎨 ARTISAN – Multi-Brand Creative Storefront

**ARTISAN** is a comprehensive digital storefront featuring curated clothing, inspiring books, and transformative life coaching. This platform showcases the creative works and services of Tovias Solé across multiple brand verticals.

## 🌟 Live Preview

**GitHub Repository**: [https://github.com/ThePearsonEffect/artbytovias](https://github.com/ThePearsonEffect/artbytovias)

**Deployment**: Ready for GitHub Pages or custom hosting

---

## 🏗️ Project Structure

```bash
/
├── public/
│   ├── images/                 # All product images and brand assets
│   │   ├── *.png              # Product photos, book covers, logos
│   │   └── tribe-life-coaching-logo.png
│   └── robots.txt
│
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── CategoryShowcase.tsx    # Homepage category display
│   │   ├── FeaturedProducts.tsx    # Homepage featured items
│   │   ├── ProductGallery.jsx      # Product showcase grid
│   │   ├── Footer.tsx              # Site footer with navigation
│   │   └── ui/                     # Shadcn/UI components
│   │
│   ├── pages/                  # Brand-specific pages
│   │   ├── Index.tsx               # Homepage
│   │   ├── LankyBoisPage.tsx       # Clothing brand page
│   │   ├── ToviasSolePage.tsx      # Books and poetry
│   │   ├── TribeLifePage.tsx       # Life coaching services
│   │   ├── ShopPage.tsx            # E-commerce catalog
│   │   └── DonatePage.tsx          # Support page
│   │
│   ├── data/                   # Product and content data
│   │   ├── lankyBoisProducts.ts    # Clothing inventory
│   │   └── products.ts             # General product catalog
│   │
│   ├── contexts/               # React context providers
│   │   └── CartContext.tsx         # Shopping cart state
│   │
│   └── App.tsx                 # Root application and routing
│
├── Setup-GitHub-Images.ps1     # Image organization script
├── vite.config.ts             # Vite configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── package.json
```

---

## 🚀 Brand Verticals

### 👕 **Lanky Bois**
*Clothing for the Comfortably Different*
- Extended-fit apparel for tall and unique body types
- Artistic word cloud and graphic designs
- Premium materials with comfortable fits

### 📚 **Tovias Solé Books**
*Poetry, Prose, and Personal Expression*
- Published poetry collections
- Creative non-fiction works
- Spiritual and introspective writing

### 🔥 **Tribe Life Coaching**
*Trained. Realigned. Inspired to become.*
- Personal development coaching
- Mindset transformation services
- Community building and empowerment

---

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: GitHub Pages Ready
- **Package Manager**: npm/bun

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/ThePearsonEffect/artbytovias.git
cd artbytovias

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📸 Image Management

All product images are stored in `public/images/` and accessible via `/images/[filename]`.

**Run the image setup script:**
```powershell
./Setup-GitHub-Images.ps1
```

---

## 🌐 Deployment

This project is optimized for GitHub Pages deployment:

1. **Build the project**: `npm run build`
2. **Deploy to GitHub Pages** via repository settings
3. **Custom domain** can be configured in repository settings

---

## 📄 License

© 2025 Tovias Solé. All rights reserved.

---

## 🤝 Contributing

This is a personal brand portfolio. For inquiries about collaboration or custom work, please contact through the website's contact form.

---

**Built with ❤️ by The Pearson Effect**
