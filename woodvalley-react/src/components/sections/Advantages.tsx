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

  const colors = ['from-safety-500 to-safety-700', 'from-accent-blue to-accent-cyan', 'from-accent-teal to-accent-purple'];
  const icons = ['🌡️', '⚡', '💰'];

  return (
    <section id="advantages" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-safety-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-20 reveal">
          <span className="inline-block bg-gradient-to-r from-safety-600 to-safety-500 text-white px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6 shadow-lg">
            💪 Why Choose Us
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="text-wood-900">ENGINEERED TO</span>{' '}
            <span className="gradient-text">OUTLAST</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-safety-600 via-safety-500 to-yellow-400 mx-auto rounded-full shadow-glow mb-6"></div>
          <p className="mt-4 text-steel-700 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Why <span className="text-safety-600 font-bold">70% of factories</span> are switching back to reinforced wood.
            <br />
            We <span className="gradient-text font-bold">solved the warping issue</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {advantages.map((advantage, index) => {
            const ref = useScrollReveal();
            const Icon = advantage.icon;
            const gradientClass = colors[index];
            const emoji = icons[index];

            return (
              <div
                key={index}
                ref={ref}
                className="card-3d card-glow relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-safety-400 group reveal overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
                    <Icon className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 text-4xl animate-float">{emoji}</div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold mb-4 text-wood-900 group-hover:text-safety-600 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {advantage.description}
                </p>

                {/* Decorative Corner */}
                <div className={`absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br ${gradientClass} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div ref={titleRef} className="reveal mt-20 grid grid-cols-3 gap-8 p-10 bg-gradient-to-r from-wood-900 via-steel-800 to-wood-900 rounded-3xl shadow-2xl">
          <div className="text-center">
            <div className="text-5xl font-display font-bold gradient-text mb-2">70%</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Factory Switch Rate</div>
          </div>
          <div className="text-center border-x border-white/20">
            <div className="text-5xl font-display font-bold gradient-text mb-2">40%</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Cost Savings vs Plastic</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-display font-bold gradient-text mb-2">5x</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Longer Lifespan</div>
          </div>
        </div>
      </div>
    </section>
  );
};
