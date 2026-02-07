import { Star, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function Hero() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const text1 = "MULTIPLE ";
  const text2 = "CAREER";
  const text3 = " CENTER";
  const totalLength = text1.length + text2.length + text3.length;

  const handleExploreCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
            setVisibleCount(0); // Reset when out of view
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let startDelay: ReturnType<typeof setTimeout>;

    if (isInView) {
      startDelay = setTimeout(() => {
        interval = setInterval(() => {
          setVisibleCount((prev) => {
            if (prev >= totalLength) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
        }, 100);
      }, 500);
    }

    return () => {
      clearTimeout(startDelay);
      clearInterval(interval);
    };
  }, [isInView, totalLength]);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900" id='hero'>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vdo.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/40 to-slate-900/60 z-10"></div>
        {/* Red tint overlay for branding integration */}
        <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg shadow-red-900/20 animate-fade-in-up border border-red-500/50">
            <Star size={14} className="fill-yellow-400 text-yellow-400 animate-pulse" />
            <span className="tracking-wide uppercase">Admissions Open 2026-27</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2 mb-8">
            <h2 className="text-xl md:text-3xl font-medium text-slate-300 tracking-wider uppercase mb-2 animate-fade-in-up animate-delay-100">
              St. Joseph's School
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight drop-shadow-2xl min-h-[1.1em]">
              {/* Part 1: MULTIPLE */}
              {text1.split('').map((char, i) => (
                <span key={`p1-${i}`} className={`transition-opacity duration-100 ${i < visibleCount ? 'opacity-100' : 'opacity-0'}`}>
                  {char}
                </span>
              ))}

              {/* Part 2: CAREER (Red Gradient) */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                {text2.split('').map((char, i) => (
                  <span key={`p2-${i}`} className={`transition-opacity duration-100 ${i + text1.length < visibleCount ? 'opacity-100' : 'opacity-0'}`}>
                    {char}
                  </span>
                ))}
              </span>

              {/* Part 3: CENTER */}
              {text3.split('').map((char, i) => (
                <span key={`p3-${i}`} className={`transition-opacity duration-100 ${i + text1.length + text2.length < visibleCount ? 'opacity-100' : 'opacity-0'}`}>
                  {char}
                </span>
              ))}

            </h1>
            <div className="flex items-center justify-center gap-3 mt-6 animate-fade-in-up animate-delay-300">
              <span className="h-px w-8 md:w-16 bg-slate-500/50"></span>
              <span className="text-lg md:text-2xl font-bold text-slate-200 italic">
                Powered by <span className="text-red-500 font-black not-italic text-2xl md:text-3xl ml-1">WEDA</span>
              </span>
              <span className="h-px w-8 md:w-16 bg-slate-500/50"></span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-2xl text-slate-300 mb-10 font-light max-w-3xl leading-relaxed drop-shadow-md animate-fade-in-up animate-delay-500">
            Shaping Young Minds into <strong className="text-white font-bold">Confident Leaders</strong>.
            Integrated schooling with expert guidance for Defence, Engineering, Medical, & Civil Services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up animate-delay-700">
            <button className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-xl shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer" onClick={() => window.open('https://winningedgecareer.opensourcecrm.in/forms/wtl/b6f7f506fcc2a8ad5f0d592b715c8850?styled=1', '_blank')}>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <span>REGISTER NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer hover:border-white/30" onClick={handleExploreCourses}>
              <span>EXPLORE COURSES</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
    </section>
  );
}