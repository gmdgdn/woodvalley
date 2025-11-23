import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons } from '@/components/ui/icon';
import { Warehouse } from 'lucide-react';

const routes = [
  {
    icon: Icons.ship,
    title: 'To Gulf (KSA/UAE/Qatar)',
    description: '5-7 Days Transit Time via Red Sea.',
  },
  {
    icon: Icons.truck,
    title: 'To Africa (Libya/Sudan/Nigeria)',
    description: 'Direct land routes and fast sea freight.',
  },
];

export const GlobalReach = () => {
  const titleRef = useScrollReveal();
  const mapRef = useScrollReveal();

  return (
    <section id="global" className="py-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div ref={titleRef} className="md:w-1/2 reveal">
          <span className="text-safety-500 font-bold uppercase tracking-widest text-sm">
            Logistics & Export
          </span>
          <h2 className="font-display text-4xl font-bold text-wood-900 mt-2 mb-6">
            FASTER DELIVERY.
            <br />
            LOWER SHIPPING COSTS.
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Located in Egypt, the gateway between Africa and the Middle East, Wood Valley offers significantly shorter lead times than Asian competitors.
          </p>
          <div className="space-y-4">
            {routes.map((route, index) => {
              const Icon = route.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-sm border-l-4 border-wood-800"
                >
                  <Icon className="w-8 h-8 text-safety-500" />
                  <div>
                    <h4 className="font-bold text-wood-900">{route.title}</h4>
                    <p className="text-sm text-gray-500">{route.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={mapRef} className="md:w-1/2 relative reveal">
          {/* Abstract Map Graphic */}
          <div className="aspect-square bg-gray-100 rounded-full relative flex items-center justify-center border-4 border-gray-100">
            <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 animate-[spin_10s_linear_infinite]"></div>
            <div className="text-center z-10">
              <Warehouse className="w-16 h-16 text-wood-300 mb-4 mx-auto" />
              <p className="font-display font-bold text-xl text-wood-800">CAIRO HUB</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                Exporting Worldwide
              </p>
            </div>
            {/* Orbiting dots */}
            <div className="absolute top-10 left-10 bg-safety-500 w-4 h-4 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-10 bg-safety-500 w-3 h-3 rounded-full animate-ping delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
