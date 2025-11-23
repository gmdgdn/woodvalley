import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icon';

const products = [
  {
    model: 'WV-STD',
    name: 'The Standard',
    subtitle: 'Best For: Manual & Semi-Automatic Machines / Egg-Layers',
    description: 'The budget-friendly upgrade from raw timber. 30mm - 40mm thickness. Treated Pine. No steel edges.',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800',
    features: ['30mm - 40mm Thickness', 'Kiln-Dried Treated Pine', 'Oil Dipped Surface', 'Finger Jointed Boards'],
    isFeatured: false,
  },
  {
    model: 'WV-PRO',
    name: 'The Professional',
    subtitle: 'Best For: Fully Automatic Lines (Masa, Zenith, QGM, Hess)',
    description: 'Essential for robot handling and sensor detection. The industry standard for high-volume plants.',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800',
    features: ['40mm - 55mm Thickness', 'Full C-Channel Steel Edges', 'Galvanized & Rust Resistant', 'Vibration Optimized'],
    isFeatured: true,
  },
  {
    model: 'WV-HD',
    name: 'The Heavy Duty',
    subtitle: 'Best For: Heavy Curbstones, Paving Stones & Special Machines',
    description: 'Maximum load bearing. Designed for machines requiring elevated curing.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    features: ['Custom Thickness', 'Steel Pipe Legs/Feet Included', 'Steel Rod Integration', 'Max Load: 500kg+'],
    isFeatured: false,
  },
];

export const Products = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="products" className="py-32 bg-gradient-to-br from-wood-950 via-steel-900 to-wood-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-safety-600/10 to-safety-800/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={titleRef}
          className="flex flex-col md:flex-row justify-between items-center mb-20 reveal text-center md:text-left"
        >
          <div>
            <span className="bg-gradient-to-r from-safety-600 to-safety-500 text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] inline-block rounded-full mb-4 shadow-glow">
              ⚙️ Our Catalog
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              <span className="gradient-text">PRODUCTION</span> PALLETS
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-safety-600 to-yellow-400 mt-4 mx-auto md:mx-0 rounded-full"></div>
          </div>
          <a
            href="#contact"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 glass-dark hover:bg-white/20 rounded-xl transition-all group"
          >
            <span className="text-sm font-bold uppercase tracking-wider">Download Catalog</span>
            <Icons.arrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => {
            const ref = useScrollReveal();
            return (
              <div
                key={index}
                ref={ref}
                className={`card-3d card-glow relative rounded-3xl p-8 transition-all duration-500 group reveal ${
                  product.isFeatured
                    ? 'bg-gradient-to-br from-wood-700 via-wood-800 to-steel-800 border-3 border-safety-500 shadow-xl-colored transform md:scale-110'
                    : 'glass-dark border-2 border-white/10 hover:border-safety-500/50'
                }`}
              >
                {/* Featured Badge */}
                {product.isFeatured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-safety-600 to-safety-500 text-white px-6 py-2 font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-neon">
                        ⭐ Best Seller
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-safety-600 to-safety-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                    </div>
                  </div>
                )}

                {/* Image Container with Overlay */}
                <div className="relative h-56 mb-8 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900 via-transparent to-transparent opacity-60"></div>
                  {/* Model Badge */}
                  <div className="absolute top-4 right-4 bg-wood-900/90 backdrop-blur-sm border border-safety-500/50 text-safety-400 text-xs font-bold px-3 py-1.5 rounded-lg">
                    {product.model}
                  </div>
                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-safety-500 rounded-full flex items-center justify-center shadow-glow">
                      <Icons.arrowRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-safety-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-safety-300 text-xs font-bold uppercase tracking-wider mb-4">
                  {product.subtitle}
                </p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-safety-500 to-safety-600 flex items-center justify-center flex-shrink-0 shadow-glow">
                        <Icons.check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {product.isFeatured ? (
                  <Button
                    variant="safety"
                    className="w-full uppercase text-base py-6 shadow-glow hover:shadow-xl-colored transition-all group"
                  >
                    <span>Request Quote</span>
                    <Icons.arrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-2 border-safety-500 text-safety-400 hover:bg-safety-500 hover:text-white uppercase text-base py-6 transition-all backdrop-blur-sm"
                  >
                    Get Specs
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div ref={titleRef} className="reveal mt-20 text-center">
          <p className="text-gray-300 text-lg mb-6">Need custom dimensions or special requirements?</p>
          <Button variant="safety" size="xl" asChild className="shadow-glow px-12">
            <a href="#contact">
              <Icons.mail className="w-5 h-5 mr-2" />
              Contact Our Engineering Team
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
