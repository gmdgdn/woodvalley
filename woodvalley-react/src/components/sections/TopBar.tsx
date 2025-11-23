import { Icons } from '@/components/ui/icon';

export const TopBar = () => {
  return (
    <div className="bg-wood-900 text-gray-300 text-xs py-2">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="hidden md:flex gap-4">
          <span className="flex items-center gap-2">
            <Icons.mail className="w-3 h-3" />
            export@woodvalley.com
          </span>
          <span className="flex items-center gap-2">
            <Icons.phone className="w-3 h-3" />
            +20 100 123 4567
          </span>
        </div>
        <div className="flex gap-4 items-center ml-auto">
          <span className="hover:text-white cursor-pointer transition">AR</span>
          <span className="text-safety-500 font-bold cursor-pointer">EN</span>
          <span className="hover:text-white cursor-pointer transition">FR</span>
        </div>
      </div>
    </div>
  );
};
