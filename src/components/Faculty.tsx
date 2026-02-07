import { Award, Building2, Shield } from 'lucide-react';


const facultyMembers = [
  {
    name: 'Mr. Shishir Singh Rana',
    role: 'Chairman',
    image: '3.png',
    subject: 'Visionary Leadership',
    affiliation: "St. Joseph's School",
    type: 'school'
  },
  {
    name: 'Mr. Mukesh Lal',
    role: 'Director - The Maasters Class',
    image: '5.png',
    subject: 'Career Planning',
    affiliation: "St. Joseph's School",
    type: 'school'
  },
  {
    name: 'Capt. Neesha Singh (Retd.)',
    role: 'Career Wing',
    image: '2.png',
    subject: 'Personality Development',
    affiliation: "St. Joseph's School",
    type: 'school'
  },
  {
    name: 'Col. Amardeep Singh, SM (Retd.)',
    role: 'Director',
    image: '1.png',
    subject: 'Career Leadership',
    affiliation: 'WEDA Gurukool',
    type: 'weda'
  }
];



export function Faculty() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 font-bold rounded-full text-sm mb-4 border border-red-100">
            Our Mentors
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Our <span className="text-red-600">Expert Mentors</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Dedicated educators and defence experts committed to guiding your child towards academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {facultyMembers.map((member, index) => (
            <div key={index} className="h-full">
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col h-full"
              >
                {/* Affiliation Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md ${member.type === 'weda'
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-800 text-white'
                    }`}>
                    {member.type === 'weda' ? <Shield size={12} /> : <Building2 size={12} />}
                    {member.affiliation}
                  </span>
                </div>

                {/* Image Section */}
                <div className="h-[400px] overflow-hidden relative bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between relative bg-white">
                  <div className="-mt-12 mb-4 relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${member.type === 'weda' ? 'bg-red-600' : 'bg-slate-800'
                      }`}>
                      <Award size={24} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight min-h-[3rem] flex items-end">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-medium mb-4 ${member.type === 'weda' ? 'text-red-600' : 'text-slate-600'
                      }`}>
                      {member.role}
                    </p>

                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Expertise</p>
                      <p className="text-sm font-semibold text-slate-700">{member.subject}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
