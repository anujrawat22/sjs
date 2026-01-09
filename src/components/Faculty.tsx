import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react';

const facultyMembers = [
  {
    name: 'Dr. Robert Anderson',
    role: 'Principal',
    qualification: 'Ph.D. in Education',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'Administration',
    color: 'blue'
  },
  {
    name: 'Mrs. Sarah Mitchell',
    role: 'Vice Principal',
    qualification: 'M.Sc. Physics',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'Physics',
    color: 'indigo'
  },
  {
    name: 'Mr. James Wilson',
    role: 'Senior Coordinator',
    qualification: 'M.Sc. Mathematics',
    image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'Mathematics',
    color: 'violet'
  },
  {
    name: 'Ms. Emily Davis',
    role: 'HOD Science',
    qualification: 'M.Sc. Chemistry',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'Chemistry',
    color: 'purple'
  },
  {
    name: 'Mr. David Brown',
    role: 'Sports Director',
    qualification: 'B.P.Ed, M.P.Ed',
    image: 'https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'Physical Education',
    color: 'sky'
  },
  {
    name: 'Ms. Olivia Taylor',
    role: 'HOD Arts',
    qualification: 'M.F.A.',
    image: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=800',
    subject: 'Fine Arts',
    color: 'pink'
  }
];

export function Faculty() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-50/50 -skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold rounded-full text-sm mb-4">
            Our Mentors
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Our <span className="text-blue-600">Expert Faculty</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Dedicated educators committed to guiding your child towards academic excellence and holistic growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              {/* Image Section - Increased Height and adjusted fit */}
              <div className="h-[350px] overflow-hidden relative">
                <div className={`absolute inset-0 bg-${member.color}-900/10 group-hover:bg-transparent transition-colors z-10`}></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Icons */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-end gap-3">
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-900 transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-900 transition-colors">
                    <Mail size={18} />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300`}>
                    <Award size={20} />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <GraduationCap size={16} className="text-blue-400" />
                    <span>{member.qualification}</span>
                  </div>
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Expertise</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                      {member.subject}
                    </span>
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
