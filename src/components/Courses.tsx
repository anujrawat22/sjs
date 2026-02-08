import { ShieldCheck, Rocket, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Courses() {
  return (
    <section id="courses" className="py-24 bg-linear-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 font-semibold rounded-full text-sm mb-4 backdrop-blur-sm border border-red-100">
            Academic Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Career <span className="text-red-600">Pathways</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive preparation for competitive exams alongside academic excellence, tailored for every stage of your child's growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Class 4-8 Card */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-linear-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-500/30 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-slate-900">Foundation Stage</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full">Class 4 - 8</span>
              </div>

              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Preparation for:</p>

              <ul className="space-y-3 mb-8">
                {[
                  'Sainik School',
                  'RMS',
                  'RIMC',
                  'UP Sainik School'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 group/item">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="font-medium group-hover/item:text-slate-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/course/foundation-stage" className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Class 9-10 Card */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-linear-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
                <Rocket size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-slate-900">Pre-Career Stage</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full">Class 9 & 10</span>
              </div>

              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Foundation Course for:</p>

              <ul className="space-y-3 mb-8">
                {[
                  'NDA (Foundation)',
                  'JEE & NEET (Concept Foundation)',
                  'CLAT & CUET (Introduction Level)',
                  'Civil Services (Junior – Foundation)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 group/item">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="font-medium group-hover/item:text-red-700 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/course/pre-career-stage" className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Class 11-12 Card */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-linear-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-900/30 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-slate-900">Career Excellence</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-full">Class 11 & 12</span>
              </div>

              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Integrated Preparation for:</p>

              <ul className="space-y-3 mb-8">
                {[
                  'NDA (Foundation + Advance)',
                  'JEE / NEET (Targeted Preparation)',
                  'CLAT / CUET',
                  'Civil Services (Junior)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 group/item">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="font-medium group-hover/item:text-slate-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/course/career-excellence" className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
