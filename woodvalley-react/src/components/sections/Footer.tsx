import { Icons } from '@/components/ui/icon';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-950 text-gray-400 py-12 border-t border-gray-800 text-sm">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4 text-white">
            <Icons.layers className="w-8 h-8" />
            <span className="font-display font-bold text-2xl">WOOD VALLEY</span>
          </div>
          <p className="mb-4">
            The leading manufacturer of reinforced wooden pallets for concrete block industries in the MEA region.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-safety-500 transition">
              <Icons.linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-safety-500 transition">
              <Icons.facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-safety-500 transition">
              <Icons.youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase mb-4">Products</h4>
          <ul className="space-y-2">
            <li>
              <a href="#products" className="hover:text-safety-500 transition">
                WV-STD (Standard)
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-safety-500 transition">
                WV-PRO (Professional)
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-safety-500 transition">
                WV-HD (Heavy Duty)
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-safety-500 transition">
                Custom Sizes & Quotes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-safety-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-safety-500 transition">
                Manufacturing Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-safety-500 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-safety-500 transition">
                Blog / News
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-safety-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-safety-500 transition">
                Terms of Supply
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-safety-500 transition">
                Warranty Info
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        <p>&copy; {currentYear} Wood Valley Industries. All rights reserved.</p>
      </div>
    </footer>
  );
};
