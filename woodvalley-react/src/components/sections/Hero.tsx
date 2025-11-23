import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icon';

export const Hero = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();
  const ref4 = useScrollReveal();

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-fixed text-white overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-900 via-wood-900 to-steel-800 opacity-95"></div>

      {/* Dynamic Shapes */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-safety-500/20 to-safety-700/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-safety-600/10 to-accent-teal/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Geometric Patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border-4 border-safety-500 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-40 w-48 h-48 border-4 border-accent-blue rounded-full animate-pulse"></div>
      </div>

      {/* Floating Icons/Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Icons.layers className="absolute top-20 left-10 w-12 h-12 text-safety-500/30 animate-float" />
        <Icons.dumbbell className="absolute top-40 right-32 w-10 h-10 text-accent-cyan/30 animate-float-slow" />
        <Icons.warehouse className="absolute bottom-32 left-1/4 w-14 h-14 text-safety-600/20 float-diagonal" />
        <Icons.truck className="absolute bottom-40 right-1/4 w-12 h-12 text-accent-blue/30 animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-5xl mx-auto md:mx-0">
          <div ref={ref1} className="reveal mb-6">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-safety-600 to-safety-500 text-white px-6 py-3 text-sm font-bold uppercase tracking-[0.3em] inline-block rounded-full shadow-neon">
                🏭 Engineered in Egypt
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-safety-600 to-safety-500 rounded-full blur-md opacity-50 animate-pulse"></span>
            </span>
          </div>

          <div ref={ref2} className="reveal mb-8">
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[1.1] mb-4">
              THE BACKBONE OF
            </h1>
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[1.1]">
              <span className="gradient-text text-7xl md:text-9xl block animate-gradient-x">
                UNSTOPPABLE PRODUCTION
              </span>
            </h1>
            <div className="h-2 w-32 bg-gradient-to-r from-safety-600 via-safety-500 to-yellow-400 mt-6 rounded-full shadow-glow"></div>
          </div>

          <div ref={ref3} className="reveal mb-10">
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed font-medium">
              Heavy-duty wooden pallets <span className="text-safety-400 font-bold">reinforced with steel</span>.
              Designed to withstand the <span className="text-accent-cyan font-bold">Gulf heat</span> and
              <span className="text-accent-teal font-bold"> African humidity</span>.
              The <span className="gradient-text font-bold">cost-effective alternative</span> to plastic.
            </p>
          </div>

          <div ref={ref4} className="reveal flex flex-col md:flex-row gap-6">
            <Button
              variant="safety"
              size="xl"
              asChild
              className="group relative overflow-hidden shadow-xl-colored hover:shadow-glow transition-all duration-300 px-10 py-7 text-lg"
            >
              <a href="#contact" className="font-display uppercase tracking-wider flex items-center gap-3">
                <Icons.mail className="w-6 h-6 group-hover:animate-bounce-horizontal" />
                Request Catalog
                <Icons.arrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="xl"
              asChild
              className="border-3 border-white hover:bg-white hover:text-steel-900 text-white font-display uppercase tracking-wider group shadow-xl backdrop-blur-sm bg-white/10 px-10 py-7 text-lg"
            >
              <a href="#products" className="flex items-center gap-3">
                <Icons.playCircle className="w-6 h-6 group-hover:text-safety-500 group-hover:scale-125 transition-all" />
                See It In Action
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div ref={ref4} className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <div className="glass rounded-2xl p-4 text-center backdrop-blur-md border-2 border-white/20 hover:border-safety-500/50 transition-all">
              <div className="text-4xl font-display font-bold gradient-text">15+</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">Years</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center backdrop-blur-md border-2 border-white/20 hover:border-safety-500/50 transition-all">
              <div className="text-4xl font-display font-bold gradient-text">500k+</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">Pallets</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center backdrop-blur-md border-2 border-white/20 hover:border-safety-500/50 transition-all">
              <div className="text-4xl font-display font-bold gradient-text">700+</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">Factories</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center backdrop-blur-md border-2 border-white/20 hover:border-safety-500/50 transition-all">
              <div className="text-4xl font-display font-bold gradient-text">100%</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
        <span className="text-xs uppercase tracking-widest text-gray-300">Scroll to Explore</span>
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-safety-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </header>
  );
};
