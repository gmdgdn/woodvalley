import { useState, useEffect } from 'react';
import { Icons } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur shadow-md border-b-4 border-safety-500 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-wood-800 rounded flex items-center justify-center text-white text-xl">
            <Icons.layers className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl text-wood-900 tracking-tight leading-none group-hover:text-safety-500 transition">
              WOOD VALLEY
            </h1>
            <span className="text-[10px] tracking-widest uppercase font-bold text-steel-500">
              Industrial Solutions
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wide">
          <a href="#advantages" className="hover:text-safety-500 transition">
            Why Us
          </a>
          <a href="#products" className="hover:text-safety-500 transition">
            Products
          </a>
          <a href="#global" className="hover:text-safety-500 transition">
            Global Reach
          </a>
          <Button variant="safety" size="lg" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <span>Get Quote</span>
              <Icons.arrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-wood-800">
          <Icons.menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};
