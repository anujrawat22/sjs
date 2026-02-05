import { Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-blue-900">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source
            src="/vdo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-blue-950/40 z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-yellow-400/50 text-yellow-300 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in shadow-lg">
            <Star size={14} className="fill-yellow-400 text-yellow-400 animate-pulse" />
            Admissions Open 2026-27
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
            Multiple Career Center <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400">
              under St. Joseph School, powered by WEDA
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium max-w-2xl leading-relaxed drop-shadow-lg">
            Shaping Young Minds into
            <br />
            <span className="text-white font-bold">Confident Leaders of Tomorrow</span>
          </p>

          <div className="bg-white/10 backdrop-blur-md border-l-4 border-yellow-400 p-6 rounded-r-2xl mb-12 max-w-xl shadow-xl">
            <p className="text-lg text-blue-50 italic">
              Integrated schooling with expert guidance for Defence, Engineering, Medical, Law & Civil Services pathways.
            </p>
          </div>

          {/* <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <BookOpen size={20} />, text: 'Schooling' },
              { icon: <Trophy size={20} />, text: 'Coaching' },
              { icon: <Home size={20} />, text: 'Hostel' }
            ].map((item, idx) => (
              <div key={idx} className="group flex items-center gap-3 bg-blue-950/40 backdrop-blur-xl border border-blue-400/30 px-8 py-4 rounded-xl text-white font-semibold hover:bg-yellow-400 hover:text-blue-950 hover:border-yellow-400 transition-all duration-300 cursor-default shadow-lg hover:scale-105">
                <span className="text-yellow-400 group-hover:text-blue-900 transition-colors">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div> */}
          <div className="group flex items-center gap-3 bg-yellow-400 backdrop-blur-xl border border-blue-400/30 px-8 py-4 rounded-xl text-white font-semibold hover:bg-yellow-600 hover:text-blue-950 hover:border-yellow-400 transition-all duration-300 cursor-pointer shadow-lg hover:scale-105">
            <span className="text-white group-hover:text-blue-900 transition-colors">REGISTER NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
