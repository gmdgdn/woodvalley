import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icon';

export const Contact = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-wood-900 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className="bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row reveal"
        >
          {/* Left: Info */}
          <div className="bg-gradient-to-br from-safety-500 to-safety-600 p-12 md:w-1/3 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="font-display font-bold text-3xl mb-4">READY TO UPGRADE?</h3>
              <p className="mb-8 font-medium text-white/90">
                Get a custom quote within 24 hours. Factory visits welcome. We speak Arabic, English, and French.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icons.phone className="w-5 h-5" />
                  <span className="font-medium">+20 100 987 6543</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icons.mail className="w-5 h-5" />
                  <span className="font-medium">sales@woodvalley.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icons.mapPin className="w-5 h-5" />
                  <span className="font-medium">Industrial Zone, Cairo, Egypt</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <p className="text-xs uppercase tracking-widest mb-2 text-white/80">Quick Response</p>
                <p className="text-sm font-medium">WhatsApp us for instant technical support</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-12 md:w-2/3 bg-white">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <h4 className="font-display font-bold text-2xl text-wood-800 mb-2">
                  Request Quote
                </h4>
                <div className="h-1 w-12 bg-safety-500"></div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:border-safety-500 focus:outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:border-safety-500 focus:outline-none transition"
                  placeholder="Factory Name"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:border-safety-500 focus:outline-none transition"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:border-safety-500 focus:outline-none transition"
                  placeholder="+966..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Machine Brand
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:border-safety-500 focus:outline-none transition"
                  placeholder="e.g. Masa, Zenith, QGM, Hess..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Pallet Size Needed
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:border-safety-500 focus:outline-none transition"
                  placeholder="e.g. 1200x900mm, 1400x800mm..."
                />
              </div>

              <div className="col-span-2">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Additional Requirements / Questions
                </label>
                <textarea
                  className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:border-safety-500 focus:outline-none transition h-24"
                  placeholder="Tell us about your production needs, quantity, delivery location..."
                ></textarea>
              </div>

              <div className="col-span-2">
                <Button variant="wood" className="w-full uppercase tracking-wide py-4 px-8">
                  Send Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
