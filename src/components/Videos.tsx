import { Play } from 'lucide-react';

export function Videos() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-900">About SJS Saharanpur</h3>
            <div className="relative aspect-video bg-blue-900 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center group cursor-pointer">
              <img src="/12.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt="About SJS" />
              <div className="relative z-10 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 group-hover:scale-110 transition-transform shadow-xl">
                <Play fill="currentColor" size={24} />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-900">Courses by WEDA Gurukool</h3>
            <div className="relative aspect-video bg-blue-900 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center group cursor-pointer">
              <img src="/13.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt="Courses" />
              <div className="relative z-10 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 group-hover:scale-110 transition-transform shadow-xl">
                <Play fill="currentColor" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
