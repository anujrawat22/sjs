import { Phone, Calendar, ClipboardCheck, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-32 bg-fixed bg-center bg-cover overflow-hidden" style={{ backgroundImage: "url('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
      {/* Dark Overlay for Readability (No Gradients as requested) */}
      <div className="absolute inset-0 bg-blue-950/30"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-16 text-center shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight drop-shadow-lg">
            Take the First Step Today
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            "SJS Saharanpur provides an environment where students learn with purpose, live with discipline, and grow with confidence."
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Button 1 */}
            <button className="group w-full md:w-auto bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 hover:scale-105">
              <Phone size={20} className="group-hover:rotate-12 transition-transform" />
              Enquire Now
            </button>
            
            {/* Button 2 */}
            <button className="group w-full md:w-auto bg-white text-blue-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-white/30 hover:scale-105">
              <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
              Schedule Visit
            </button>
            
            {/* Button 3 */}
            <button className="group w-full md:w-auto bg-blue-600 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-600/30 hover:scale-105">
              <ClipboardCheck size={20} className="group-hover:rotate-12 transition-transform" />
              Apply Now
              <ArrowRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-blue-200/80 font-semibold text-sm uppercase tracking-widest">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Admissions Open | Limited Seats Available
          </div>
        </div>
      </div>
    </section>
  );
}
