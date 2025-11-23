# Quick Start Guide

Get the Wood Valley landing page running on your local machine in under 5 minutes.

## Prerequisites

- **Node.js** 18 or higher ([Download](https://nodejs.org))
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

Check your versions:
```bash
node --version  # Should be v18.x or higher
npm --version   # Should be v9.x or higher
```

---

## Installation & Setup

### 1. Clone the Repository (if you haven't already)

```bash
git clone <your-repo-url>
cd woodvalley/woodvalley-react
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 19
- Vite
- Tailwind CSS
- Lucide React (icons)
- And more...

### 3. Start the Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v7.2.4  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 4. Open in Browser

Navigate to [http://localhost:5173](http://localhost:5173)

You should now see the Wood Valley landing page! 🎉

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## Project Structure Overview

```
woodvalley-react/
├── src/
│   ├── components/
│   │   ├── sections/     # Page sections (Hero, Products, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
└── package.json          # Dependencies
```

---

## Making Changes

### Editing Content

1. **Hero Section**: Edit `src/components/sections/Hero.tsx`
2. **Products**: Modify the `products` array in `src/components/sections/Products.tsx`
3. **Contact Info**: Update `src/components/sections/TopBar.tsx` and `Contact.tsx`
4. **Colors**: Change in `tailwind.config.js` under `theme.extend.colors`

### Hot Reload

The dev server automatically reloads when you save changes. No need to refresh manually!

### Adding a New Section

1. Create a new file in `src/components/sections/`
2. Import it in `src/App.tsx`
3. Add it to the component tree

Example:
```tsx
// src/components/sections/NewSection.tsx
export const NewSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2>New Section</h2>
      </div>
    </section>
  );
};
```

Then in `App.tsx`:
```tsx
import { NewSection } from './components/sections/NewSection';

function App() {
  return (
    <div>
      {/* ... other sections ... */}
      <NewSection />
    </div>
  );
}
```

---

## Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Module Not Found Errors

Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Run the TypeScript compiler:
```bash
npx tsc --noEmit
```

### Build Errors

Check that all dependencies are installed:
```bash
npm install
npm run build
```

---

## VS Code Recommended Extensions

For the best development experience, install:

- **ESLint** - Code quality and formatting
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **TypeScript Vue Plugin (Volar)** - Enhanced TypeScript support
- **Pretty TypeScript Errors** - Better error messages

---

## Development Tips

### 1. Use Browser DevTools
- Press `F12` to open developer tools
- Check the Console for errors
- Use the Elements tab to inspect styles

### 2. Tailwind CSS Classes
- Hover over Tailwind classes in VS Code to see the generated CSS
- Use the [Tailwind CSS Docs](https://tailwindcss.com/docs) for reference

### 3. Component Debugging
- Add `console.log()` statements to debug
- Use React DevTools browser extension

### 4. Test Responsiveness
- Use browser DevTools Device Mode (`Ctrl+Shift+M`)
- Test on real devices when possible

---

## Next Steps

1. **Customize the Design**: Update colors, fonts, and spacing in `tailwind.config.js`
2. **Add Real Content**: Replace placeholder images and text
3. **Implement Forms**: Connect the contact form to a backend service
4. **Add Analytics**: Integrate Google Analytics or Cloudflare Analytics
5. **Deploy**: See `DEPLOYMENT.md` for deployment instructions

---

## Getting Help

- **Documentation**: See `README.md` for full documentation
- **Deployment**: See `DEPLOYMENT.md` for deployment instructions
- **Issues**: Check the GitHub issues page
- **Questions**: Contact export@woodvalley.com

---

**Happy coding! 🚀**
