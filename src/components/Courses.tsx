import { ShieldCheck, Rocket, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

export function Courses() {
  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100/50 text-blue-700 font-semibold rounded-full text-sm mb-4 backdrop-blur-sm border border-blue-200/50">
            Academic Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Pathways</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive preparation for competitive exams alongside academic excellence, tailored for every stage of your child's growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Class 4-8 Card */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Foundation Stage</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">Class 4 - 8</span>
              </div>
              
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Preparation for:</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Sainik School',
                  'UPSS & RMS 6 & 9',
                  'RIMC Entrance'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 group/item">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium group-hover/item:text-blue-700 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Class 9-10 Card */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                <Rocket size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Pre-Career Stage</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full">Class 9 & 10</span>
              </div>
              
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Foundation Course for:</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'NEET & JEE',
                  'NDA Preparation',
                  'Junior Civil Services'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 group/item">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span className="font-medium group-hover/item:text-indigo-700 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Class 11-12 Card */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Career Excellence</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider rounded-full">Class 11 & 12</span>
              </div>
              
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Intensive Prep for:</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'NEET, JEE, NDA',
                  'CLAT & IPMAT',
                  'JCS & CUET'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 group/item">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span className="font-medium group-hover/item:text-violet-700 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
