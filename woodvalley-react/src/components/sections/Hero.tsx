import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icon';

export const Hero = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();
  const ref4 = useScrollReveal();

  return (
    <header className="relative h-[90vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-fixed text-white overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-safety-500/10 skew-x-12 transform translate-x-20"></div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <div ref={ref1} className="reveal">
            <span className="bg-safety-500 text-white px-3 py-1 text-sm font-bold uppercase tracking-widest inline-block mb-4 rounded-sm">
              Engineered in Egypt
            </span>
          </div>

          <div ref={ref2} className="reveal">
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mb-6">
              THE BACKBONE OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-500 to-yellow-400">
                UNSTOPPABLE PRODUCTION
              </span>
            </h1>
          </div>

          <div ref={ref3} className="reveal">
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Heavy-duty wooden pallets reinforced with steel. Designed to withstand the Gulf heat and African humidity. The cost-effective alternative to plastic.
            </p>
          </div>

          <div ref={ref4} className="reveal flex flex-col md:flex-row gap-4">
            <Button variant="safety" size="xl" asChild>
              <a href="#contact" className="font-display uppercase tracking-wider">
                Request Catalog
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="border-2 border-white hover:bg-white hover:text-wood-900 text-white font-display uppercase tracking-wider group"
            >
              <a href="#products" className="flex items-center gap-3">
                <Icons.playCircle className="w-5 h-5 group-hover:text-safety-500" />
                See It In Action
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icons.chevronDown className="w-8 h-8 text-white opacity-50" />
      </div>
    </header>
  );
};
