import { BookOpen, Users, Rocket, ShieldCheck, Trophy, Home, Utensils, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={28} />,
    title: "Academic Excellence",
    desc: "Highly qualified faculty focused on strong fundamentals and consistent results through student-centric teaching.",
    color: "blue"
  },
  {
    icon: <Users size={28} />,
    title: "CBSE Curriculum",
    desc: "Science, Commerce, and Humanities streams with flexible academic pathways aligned with individual aptitude.",
    color: "indigo"
  },
  {
    icon: <Rocket size={28} />,
    title: "Career Pathways",
    desc: "Structured guidance for competitive exams and professional courses with early exposure to diverse careers.",
    color: "purple"
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Defence Mentorship",
    desc: "Specialized mentorship by veterans focusing on discipline, leadership, and confidence building.",
    color: "teal"
  },
  {
    icon: <Trophy size={28} />,
    title: "Physical Training",
    desc: "Daily fitness regimens building mental toughness, teamwork, and resilience through sports.",
    color: "amber"
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Holistic Growth",
    desc: "Cultural, creative, and leadership activities that encourage self-expression beyond academics.",
    color: "rose"
  },
  {
    icon: <Home size={28} />,
    title: "Secure Hostels",
    desc: "Well-maintained residential facilities with 24×7 supervision ensuring a safe and homely environment.",
    color: "emerald"
  },
  {
    icon: <Utensils size={28} />,
    title: "Nutritious Mess",
    desc: "Balanced, hygienic meals prepared under strict quality standards focusing on student health.",
    color: "orange"
  }
];

const colorVariants: Record<string, { bg: string; text: string; hoverBg: string }> = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    hoverBg: 'group-hover:bg-blue-600'
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    hoverBg: 'group-hover:bg-indigo-600'
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    hoverBg: 'group-hover:bg-purple-600'
  },
  teal: {
    bg: 'bg-teal-50',
    text: 'text-teal-600',
    hoverBg: 'group-hover:bg-teal-600'
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    hoverBg: 'group-hover:bg-amber-600'
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    hoverBg: 'group-hover:bg-rose-600'
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    hoverBg: 'group-hover:bg-emerald-600'
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    hoverBg: 'group-hover:bg-orange-600'
  }
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-4 py-2 rounded-full">
            Our Core Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 mb-6">
            Why Choose <span className="text-blue-600">SJS Saharanpur?</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A School That Builds Scholars, Leaders & Responsible Citizens through a perfect blend of tradition and modernity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = colorVariants[feature.color];
            return (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
                
                <div className={`relative w-14 h-14 rounded-2xl bg-white shadow-sm ${colors.text} flex items-center justify-center mb-6 ${colors.hoverBg} group-hover:text-white transition-colors duration-300 z-10`}>
                  {feature.icon}
                </div>
                
                <h4 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
