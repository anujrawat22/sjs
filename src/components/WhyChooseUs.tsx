import { BookOpen, Users, Rocket, ShieldCheck, Trophy, Home, Utensils, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={28} />,
    title: "Academic Excellence",
    desc: "Experienced faculty ensure strong academic fundamentals, regular assessments, and consistent progress aligned with CBSE and competitive exam requirements.",
    color: "blue"
  },
  {
    icon: <Users size={28} />,
    title: "CBSE Curriculum",
    desc: "CBSE-affiliated schooling up to Class 12 with Science, Commerce, and Humanities, supported by smart classrooms, labs, and structured academic planning.",
    color: "indigo"
  },
  {
    icon: <Rocket size={28} />,
    title: "Career Pathways",
    desc: "Early and continuous exposure to Sainik School, NDA, JEE, NEET, CLAT, CUET, and Civil Services (Junior) through integrated academic and coaching programmes.",
    color: "purple"
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Defence Mentorship",
    desc: "Guidance by Ex-NDA officers and defence veterans, focusing on discipline, leadership mindset, SSB orientation, and defence-school culture.",
    color: "teal"
  },
  {
    icon: <Trophy size={28} />,
    title: "Physical Training",
    desc: "Daily physical training and structured activities to build stamina, discipline, teamwork, and mental resilience essential for defence and competitive environments.",
    color: "amber"
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Holistic Growth",
    desc: "Special focus on spoken English, personality development, communication skills, and group activities to build confidence and character.",
    color: "rose"
  },
  {
    icon: <Home size={28} />,
    title: "Secure Hostels",
    desc: "Separate in-campus hostels for boys and girls with 24×7 supervision, resident leadership, and secure, disciplined living conditions.",
    color: "emerald"
  },
  {
    icon: <Utensils size={28} />,
    title: "Nutritious Mess",
    desc: "Hygienic, well-managed mess providing balanced, nutritious meals, with planned menus to support student health and daily training routines.",
    color: "orange"
  }
];

const colorVariants: Record<string, { bg: string; text: string; hoverBg: string }> = {
  blue: {
    bg: 'bg-slate-50',
    text: 'text-slate-700',
    hoverBg: 'group-hover:bg-slate-700'
  },
  indigo: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    hoverBg: 'group-hover:bg-red-700'
  },
  purple: {
    bg: 'bg-slate-50',
    text: 'text-slate-900',
    hoverBg: 'group-hover:bg-slate-900'
  },
  teal: {
    bg: 'bg-red-50',
    text: 'text-red-600',
    hoverBg: 'group-hover:bg-red-600'
  },
  amber: {
    bg: 'bg-slate-100',
    text: 'text-slate-800',
    hoverBg: 'group-hover:bg-slate-800'
  },
  rose: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    hoverBg: 'group-hover:bg-red-800'
  },
  emerald: {
    bg: 'bg-slate-50',
    text: 'text-slate-600',
    hoverBg: 'group-hover:bg-slate-600'
  },
  orange: {
    bg: 'bg-red-50',
    text: 'text-red-500',
    hoverBg: 'group-hover:bg-red-500'
  }
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm bg-red-50 px-4 py-2 rounded-full">
            Our Core Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 mb-6">
            Why Choose <span className="text-red-600">WEDA GURUKOOL?</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A disciplined learning ecosystem where academics, defence mentorship, residential care, and career preparation come together under one campus.
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

                <h4 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-red-700 transition-colors">
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
