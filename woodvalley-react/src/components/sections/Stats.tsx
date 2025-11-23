import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500k+', label: 'Pallets Produced' },
  { value: '700+', label: 'Factories Served' },
  { value: '100%', label: 'Quality Control' },
];

export const Stats = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-200 shadow-sm relative -mt-8 mx-4 md:mx-auto max-w-6xl rounded-sm z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
        {stats.map((stat, index) => {
          const ref = useScrollReveal();
          return (
            <div key={index} ref={ref} className="p-4 reveal">
              <div className="text-4xl font-display font-bold text-wood-800 mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-steel-500 font-bold">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
