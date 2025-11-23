import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons } from '@/components/ui/icon';

const testimonials = [
  {
    rating: 5,
    quote:
      'We used to import pallets from China, but the waiting time was killing our production schedule. Wood Valley delivered high-quality steel-reinforced pallets to Riyadh in just 10 days. The durability in the heat is impressive.',
    author: 'Eng. Mohammed Al-Otaibi',
    position: 'Production Manager, Riyadh Blocks Co.',
    initials: 'MA',
  },
  {
    rating: 5,
    quote:
      'The issue with plastic pallets was the cost. Wood Valley gave us a solution that fits our budget but is much stronger than local carpentry work. The oil treatment really helps with the humidity here in Lagos.',
    author: 'Chinedu Johnson',
    position: 'Owner, Solid Rock Construction, Nigeria',
    initials: 'CJ',
  },
];

export const Testimonials = () => {
  const titleRef = useScrollReveal();

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="reveal">
          <h2 className="font-display text-4xl font-bold text-center text-wood-900 mb-16">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const ref = useScrollReveal();
            return (
              <div
                key={index}
                ref={ref}
                className="bg-white p-8 rounded-br-3xl border-l-4 border-safety-500 shadow-sm reveal"
              >
                <div className="flex text-safety-500 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icons.star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-wood-800 font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-wood-900">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500 uppercase">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
