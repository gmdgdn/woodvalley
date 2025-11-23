# Wood Valley - Industrial Pallets Landing Page

A comprehensive, modern landing page for Wood Valley Industries, showcasing heavy-duty wooden pallets for concrete block machines.

## 🚀 Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality, accessible UI components
- **Lucide React** - Beautiful & consistent icons
- **Framer Motion** - Smooth animations

## 🎨 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Scroll-based reveal animations
- ✅ Modern industrial design aesthetic
- ✅ Optimized for performance
- ✅ SEO-friendly structure
- ✅ Type-safe codebase
- ✅ Component-based architecture
- ✅ Ready for Cloudflare Pages deployment

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd woodvalley-react

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
woodvalley-react/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   └── icon.tsx
│   │   └── sections/     # Page sections
│   │       ├── TopBar.tsx
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── Stats.tsx
│   │       ├── Advantages.tsx
│   │       ├── Products.tsx
│   │       ├── GlobalReach.tsx
│   │       ├── Testimonials.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   ├── hooks/            # Custom React hooks
│   │   └── useScrollReveal.tsx
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles & Tailwind config
├── public/               # Static assets
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies & scripts
```

## 🎨 Design System

### Colors
- **Deep Pine** (#3E2723) - Primary brand color
- **Galvanized Steel** (#455A64) - Secondary color
- **Safety Amber** (#FF6F00) - Call-to-action & accents
- **Concrete White** (#F5F5F5) - Backgrounds

### Typography
- **Headings**: Oswald (Bold, industrial feel)
- **Body**: Inter (Clean, readable)

## 🚀 Deployment to Cloudflare Pages

### Option 1: Connect Git Repository (Recommended)

1. Push your code to GitHub/GitLab
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Pages** > **Create a project**
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: `18` or higher
6. Click **Save and Deploy**

### Option 2: Direct Upload

```bash
# Build the project
npm run build

# Install Wrangler CLI (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=woodvalley
```

## 🔧 Environment Variables

No environment variables are required for the basic setup. If you add API integrations or analytics later, create a `.env` file:

```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 📝 Customization Guide

### Updating Content

1. **Company Information**: Edit `src/components/sections/TopBar.tsx` and `Contact.tsx`
2. **Products**: Modify the `products` array in `src/components/sections/Products.tsx`
3. **Testimonials**: Update the `testimonials` array in `src/components/sections/Testimonials.tsx`
4. **Stats**: Change values in `src/components/sections/Stats.tsx`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.tsx`

### Modifying Colors

Update the color scheme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      wood: { ... },
      steel: { ... },
      safety: { ... }
    }
  }
}
```

## 🎯 Performance Optimization

- **Code Splitting**: Vite automatically splits vendor and app code
- **Image Optimization**: Use WebP format for images
- **Lazy Loading**: Components are loaded on-demand
- **Minimal Bundle**: Tree-shaking removes unused code

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For questions or support, contact: export@woodvalley.com

---

**Built with ❤️ for Wood Valley Industries**
