import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons } from '@/components/ui/icon';

const advantages = [
  {
    icon: Icons.thermometer,
    title: 'Climate Resistant',
    description:
      'Kiln-dried pine wood treated with specialized oils to resist the extreme heat of the Gulf and humidity of Africa without warping.',
  },
  {
    icon: Icons.dumbbell,
    title: 'Steel Reinforcement',
    description:
      'Galvanized C-Channel steel profiles protect edges and increase load-bearing capacity, ensuring compatibility with sensors.',
  },
  {
    icon: Icons.coins,
    title: 'Cost Efficiency',
    description:
      'Get European technical specifications at Egyptian prices. 40% cheaper than plastic pallets with easier repairability.',
  },
];

export const Advantages = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="advantages" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 reveal">
          <h2 className="font-display text-4xl font-bold text-wood-900 mb-4">
            ENGINEERED TO OUTLAST
          </h2>
          <div className="w-20 h-1 bg-safety-500 mx-auto"></div>
          <p className="mt-4 text-steel-500 max-w-2xl mx-auto">
            Why 70% of factories are switching back to reinforced wood. We solved the warping issue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const ref = useScrollReveal();
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                ref={ref}
                className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition duration-300 border-t-4 border-transparent hover:border-safety-500 group reveal"
              >
                <div className="w-16 h-16 bg-wood-50 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-safety-500 group-hover:text-white transition">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
