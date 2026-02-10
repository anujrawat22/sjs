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

function MentorCard({ member }: { member: typeof facultyMembers[0] }) {
  return (
    <div className="h-full">
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col h-full">
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
  );
}

export function Faculty() {
  const schoolMentors = facultyMembers.filter(m => m.type === 'school');
  const wedaMentors = facultyMembers.filter(m => m.type === 'weda');

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

        {/* St. Joseph's School Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Building2 className="text-slate-600" />
              St. Joseph's School Mentors
            </h3>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolMentors.map((member, index) => (
              <MentorCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* WEDA Gurukool Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h3 className="text-2xl font-bold text-red-600 flex items-center gap-2">
              <Shield className="text-red-600" />
              WEDA Gurukool Mentors
            </h3>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {wedaMentors.map((member, index) => (
              <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-md">
                <MentorCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

