# ReddyTalk Website

Professional healthcare communication platform website built with Next.js 15.5, TypeScript, and Tailwind CSS.

## 🏗 Project Structure

```
ReddyTalkWebsite/
├── assets/                 # Organized website assets
│   ├── home/              # Homepage specific images, icons
│   ├── about/             # About page assets
│   ├── pricing/           # Pricing page assets
│   ├── contact/           # Contact page assets
│   ├── demo/              # Demo page assets
│   └── shared/            # Shared assets across pages
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable React components
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # Global styles and Tailwind
│   └── types/             # TypeScript type definitions
├── public/                # Static files served by Next.js
└── out/                   # Built static website (after npm run build)
```

## 🎯 Asset Management

### Easy Image Management
Each page has its own asset folder for easy organization:

- **Homepage**: `assets/home/` - Hero images, backgrounds, feature graphics
- **About Page**: `assets/about/` - Team photos, company images
- **Pricing Page**: `assets/pricing/` - Plan icons, comparison charts
- **Contact Page**: `assets/contact/` - Office photos, location images
- **Demo Page**: `assets/demo/` - Product screenshots, demo videos
- **Shared**: `assets/shared/` - Logos, common icons used across pages

### How to Change Images
1. Navigate to the specific page's asset folder
2. Replace the image file with the same filename
3. Ensure new images have appropriate dimensions
4. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ LTS
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/DandaAkhilReddy/Reddytalkwebsite.git
cd Reddytalkwebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands
```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript check
npm run clean      # Clean build artifacts
```

## 📦 Build & Deployment

### Local Build
```bash
npm run build
```
Creates optimized static files in the `out/` directory.

### Build Success ✅
- **Bundle Size**: 115KB first load (optimized)
- **Performance**: Static export ready
- **Type Safety**: Full TypeScript coverage
- **Linting**: ESLint configured

### Deployment Options
- **Static Hosting**: Deploy `out/` folder to any static host
- **Vercel**: Automatic deployment from GitHub
- **Netlify**: Drag & drop `out/` folder
- **Azure Static Web Apps**: Use Azure CLI

## 🛠 Technology Stack

- **Framework**: Next.js 15.5 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **State Management**: Zustand
- **Date Handling**: date-fns

## 📱 Features

- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: 115KB first load
- **Accessibility**: WCAG compliant
- **SEO Ready**: Meta tags and structured data
- **Fast Loading**: Static generation
- **Modern UI**: Smooth animations and interactions

## 🎨 Customization

### Changing Images
1. Go to `assets/[page-name]/`
2. Replace image files (keep same names)
3. Run `npm run build` to update

### Modifying Styles
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

### Adding New Pages
1. Create new page in `src/app/[page-name]/page.tsx`
2. Add corresponding asset folder: `assets/[page-name]/`
3. Update navigation if needed

## 📧 Contact & Support

- **Website**: https://reddytalk.ai
- **Email**: info@reddytalk.ai

## 📄 License

MIT License - see LICENSE file for details.

---

**Professional Healthcare Communication Platform** 🏥
*Built with modern web technologies for optimal performance and user experience.*
