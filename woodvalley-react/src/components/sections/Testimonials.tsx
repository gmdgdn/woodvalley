import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons } from '@/components/ui/icon';

const testimonials = [
  {
    rating: 5,
    quote:
      'The heat in Riyadh usually bends wooden pallets in a month. Wood Valley\'s oil-treated pallets have been running for a year with zero warping. They saved us a fortune compared to plastic.',
    author: 'Eng. Faisal Al-Harbi',
    position: 'Production Manager',
    company: 'Saudi Arabia 🇸🇦',
    initials: 'FA',
  },
  {
    rating: 5,
    quote:
      'Shipping from China became too expensive and slow. We switched to Wood Valley. Better quality, steel edges are stronger, and the shipment arrived in Lagos in half the time.',
    author: 'Mr. Okafor',
    position: 'CEO, Solid Block Industries',
    company: 'Nigeria 🇳🇬',
    initials: 'MO',
  },
  {
    rating: 5,
    quote:
      'Finally, an Egyptian product that beats European standards. The vibration transfer on these pallets makes our interlocks much smoother.',
    author: 'Ahmed Hassan',
    position: 'Technical Manager',
    company: 'Al-Amal Construction Materials, Egypt 🇪🇬',
    initials: 'AH',
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
                    <p className="text-sm text-gray-600 mt-1">{testimonial.company}</p>
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
