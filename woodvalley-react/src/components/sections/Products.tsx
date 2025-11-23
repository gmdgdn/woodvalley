import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icon';

const products = [
  {
    model: 'WV-ECO',
    name: 'Standard Pine',
    description: 'Ideal for manual and semi-automatic machines. High quality dried pine with tongue & groove joints.',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800',
    features: ['Thickness: 30mm - 40mm', 'Oil Dipped Surface', 'Finger Jointed Boards'],
    isFeatured: false,
  },
  {
    model: 'WV-STEEL',
    name: 'Steel Reinforced (C-Profile)',
    description: 'The ultimate solution for fully automatic lines. Steel C-channels protect ends and prevent sensor errors.',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800',
    features: ['Thickness: 40mm - 55mm', 'Galvanized Steel Ends', 'Vibration Optimized'],
    isFeatured: true,
  },
  {
    model: 'WV-HD',
    name: 'Heavy Duty Legs',
    description: 'Designed for specific block machines requiring elevated pallets. Reinforced with steel pipe legs.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    features: ['Custom Leg Height', 'Steel Rod Integration', 'Max Load: 500kg+'],
    isFeatured: false,
  },
];

export const Products = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="products" className="py-24 bg-wood-900 text-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={titleRef}
          className="flex flex-col md:flex-row justify-between items-end mb-12 reveal"
        >
          <div>
            <span className="text-safety-500 font-bold uppercase tracking-widest text-sm">
              Our Catalog
            </span>
            <h2 className="font-display text-4xl font-bold mt-2">PRODUCTION PALLETS</h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-block border-b border-safety-500 text-safety-500 hover:text-white pb-1 transition"
          >
            Download Full PDF Catalog
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const ref = useScrollReveal();
            return (
              <div
                key={index}
                ref={ref}
                className={`rounded-sm p-6 hover:scale-105 transition group reveal ${
                  product.isFeatured
                    ? 'bg-wood-800 border-2 border-safety-500 transform md:-translate-y-4 shadow-2xl relative'
                    : 'bg-white/5 backdrop-blur border border-white/10'
                }`}
              >
                {product.isFeatured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-safety-500 text-white px-4 py-1 font-bold text-xs uppercase tracking-widest rounded shadow">
                    Best Seller
                  </div>
                )}

                <div className="h-48 bg-gray-700 mb-6 flex items-center justify-center rounded-sm overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-wood-800 text-xs font-bold px-2 py-1 rounded">
                    Model: {product.model}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-2">{product.name}</h3>
                <p
                  className={`text-sm mb-4 ${
                    product.isFeatured ? 'text-gray-300' : 'text-gray-400'
                  }`}
                >
                  {product.description}
                </p>

                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Icons.check className="w-4 h-4 text-safety-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {product.isFeatured ? (
                  <Button variant="safety" className="w-full uppercase">
                    Request Quote
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-safety-500 text-safety-500 hover:bg-safety-500 hover:text-white uppercase"
                  >
                    Get Specs
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
