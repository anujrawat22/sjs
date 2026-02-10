import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ShieldCheck, Rocket, GraduationCap, CheckCircle2, ArrowRight, ArrowLeft, Globe, BookOpen, UserCheck, Layout, Trophy, Info, ChevronRight, School, Users, Calendar } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';

interface StructureItem {
    title: string;
    icon: ReactNode;
    items: string[];
}

interface Specialization {
    title: string;
    partner?: string;
    description?: string;
    focus: string[];
}

interface CourseOffered {
    title: string;
    description: string;
    subItems?: string[];
}

interface Course {
    title: string;
    subtitle: string;
    institution: string;
    tagline?: string;
    description: string;
    details: string;
    icon: ReactNode;
    structure?: StructureItem[];
    highlights?: string[];
    classes?: string;
    cta?: string;
    objectives?: string[];
    note?: string;
    benefits?: string[];
    eligibility?: string;
    delivery?: { title: string; items: string[] };
    coursesOffered?: CourseOffered[];
    specializations?: Specialization[];
    environment?: string[];
    contact?: string;
    website?: string;
}

const courseData: Record<string, Course> = {
    'foundation-stage': {
        title: 'Sainik & Military School Entrance Programme',
        subtitle: 'Foundation Stage (Classes 4–8)',
        tagline: 'Defence School Preparation Starts Early',
        institution: 'St. Joseph School | Powered by WEDA',
        description: 'The Sainik & Military School Entrance Programme at St. Joseph School, powered by WEDA, is designed for students of Class 4 to Class 8 aspiring to join Sainik Schools, Military Schools, and RIMC.',
        details: 'The programme provides structured, expert-led training focused on building academic strength, discipline, and confidence required for defence school selections. This holistic approach ensures strong performance in written exams and interviews, while helping students adapt smoothly to the military school environment.',
        icon: <ShieldCheck className="w-8 h-8" />,
        classes: 'Class 4 to Class 8',
        structure: [
            {
                title: 'Academics',
                icon: <BookOpen className="w-5 h-5" />,
                items: ['Mathematics', 'English Grammar & Comprehension', 'General Knowledge', 'Current Affairs']
            },
            {
                title: 'Physical Conditioning',
                icon: <Trophy className="w-5 h-5" />,
                items: ['Fitness and stamina development', 'Discipline-oriented training']
            },
            {
                title: 'Psychological & Interview Readiness',
                icon: <UserCheck className="w-5 h-5" />,
                items: ['Confidence building', 'Communication skills', 'Interview preparation']
            },
            {
                title: 'DISCIPLINE & OFFICER-LIKE QUALITIES',
                icon: <ShieldCheck className="w-5 h-5" />,
                items: ['Leadership Habits', 'Decision Making', 'Responsibility & Ethics']
            }
        ],
        highlights: [
            'Strong academic foundations',
            'Discipline and leadership qualities',
            'A competitive edge for future defence entrances'
        ],
        note: 'Defence school entrances are among the most competitive in India. The curriculum is research-based and exam-oriented, aligned with the latest selection standards.',
        benefits: [
            'Conducted at St. Joseph School',
            'Powered by WEDA – Defence Education Experts',
            'Balanced focus on academics, fitness & personality',
            'Structured and disciplined learning system'
        ],
        cta: 'Start Early. Train Right. Succeed with Discipline.',
        website: 'www.thewinningedge.co.in',
        contact: 'Enquire Now | Limited Seats Available'
    },
    'pre-career-stage': {
        title: 'Sainik / Military School Preparation Programme',
        subtitle: 'Pre-Career Stage (Classes IX & X)',
        institution: 'St. Joseph School | Powered by WEDA',
        description: 'St. Joseph School, in collaboration with WEDA, offers a structured Sainik / Military School Preparation Programme for students of Classes IX and X.',
        details: 'The programme is intended to support students preparing for admission to Sainik Schools and Military Schools, while also strengthening their academic performance at the secondary level.',
        icon: <Rocket className="w-8 h-8" />,
        classes: 'Classes IX & X',
        objectives: [
            'Build strong academic foundations required for Sainik School, RMS, RIMC & UP Sainik School entrance exams',
            'Familiarise students with exam patterns, syllabus, and selection process of defence schools',
            'Develop discipline, confidence, communication, and leadership qualities from an early stage',
            'Prepare students for interviews, intelligence tests, and personality assessments'
        ],
        structure: [
            {
                title: 'Academic Focus',
                icon: <BookOpen className="w-5 h-5" />,
                items: ['Academic sessions in Mathematics, English, and General Knowledge', 'Practice for analytical and logical thinking']
            },
            {
                title: 'Career & Personality',
                icon: <Layout className="w-5 h-5" />,
                items: ['Communication skills and personality development activities', 'Guidance towards defence-oriented career pathways']
            }
        ],
        note: 'A dedicated Board Examination preparation phase is included to ensure students maintain strong academic performance.',
        eligibility: 'Students currently studying in Class IX or Class X',
        delivery: {
            title: 'Programme Delivery',
            items: [
                'Conducted at St. Joseph School',
                'Academic and mentoring support provided by WEDA'
            ]
        },
        cta: 'Parents and students interested in enrolling in the programme may contact the school office for further details regarding admission, schedule, and fees.',
        contact: 'School Administration'
    },
    'career-excellence': {
        title: 'Senior Secondary Academic & Competitive Programmes',
        subtitle: 'Career Excellence (Classes XI & XII)',
        institution: 'St. Joseph School',
        description: 'St. Joseph School offers integrated academic and competitive examination preparation programmes for students of Classes XI and XII, in collaboration with The Master’s Class, WEDA, and Bench Ready.',
        details: 'These programmes are structured to ensure strong Board Examination performance while preparing students for national-level competitive examinations.',
        icon: <GraduationCap className="w-8 h-8" />,
        classes: 'Classes XI & XII',
        coursesOffered: [
            {
                title: '1. School Integrated Programme (Classes XI & XII)',
                description: 'School Curriculum integrated with:',
                subItems: [
                    'IIT–JEE & NEET preparation (The Master’s Class)',
                    'NDA & Defence Services foundation (by WEDA)',
                    'CUET, CLAT & Junior Civil Services foundation (by Bench Ready)'
                ]
            },
            {
                title: '2. Preparatory Courses',
                description: 'Crash Course for Board Examinations (Class X & XII) and short-term preparatory programmes for JEE, NEET, NDA, CUET, CLAT.',
            },
            {
                title: '3. Target Course (Post Class XII)',
                description: 'One-year Dropper Programme for competitive examinations: IIT–JEE, NEET (The Master’s Class), NDA (WEDA), CUET / CLAT / Junior Civil Services (Bench Ready).'
            }
        ],
        specializations: [
            {
                title: 'NDA & Defence Preparation',
                partner: "WEDA",
                focus: ['NDA foundation (English & General Studies)', 'Discipline and personality development', 'Communication skills and interview orientation', 'Defence career guidance']
            },
            {
                title: 'Bench Ready Support',
                partner: "Bench Ready",
                focus: [
                    'Concept-based learning aligned with CLAT, CUET, IPMAT & other competitive exam patterns',
                    'Practice-oriented preparation for accuracy, speed & exam temperament',
                    'Strong focus on Communication Skills & Confidence Building',
                    'Aptitude, Logical Reasoning & Interview Orientation for CLAT, CUET & IPMAT'
                ]
            },
            {
                title: 'IIT-JEE (Mains & Advanced) & NEET PROGRAMME',
                partner: "The Master's Class",
                focus: [
                    'Strong Conceptual Foundation for Mains, Advanced & NEET',
                    'High-level Practice focused on speed, accuracy & problem-solving',
                    'Smart Time Management & Exam Strategy',
                    'Integrated Board + Competitive Exam Preparation'
                ]
            }


        ],
        environment: [
            'Well-ventilated classrooms and subject-specific laboratories',
            'Experienced faculty and academic mentors',
            'Separate in-campus hostel facilities for boys and girls',
            'Safe, secure, and disciplined campus environment'
        ],
        cta: 'Parents and students seeking information regarding admission, programme details, or fee structure may contact the School Administration Office.',
        contact: '+91 7417 656 633',
        website: 'www.thewinningedge.co.in'
    }
};

export default function CourseDetail() {
    const { slug } = useParams();
    const course = courseData[slug as keyof typeof courseData];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">Course Not Found</h1>
                    <Link to="/" className="text-red-600 hover:text-red-700 font-black flex items-center justify-center gap-2 uppercase tracking-widest">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            {/* Header Section - Modern Material Look with Dark Brand Colors */}
            <header className="relative bg-slate-900 py-16 overflow-hidden">
                {/* Decorative Background - Same as Landing Page Hero */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-900/40 to-slate-900/60 z-10"></div>
                    <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-500/20">
                                {course.icon}
                            </div>
                            <div className="h-px w-8 bg-white/20 rounded-full"></div>
                            <span className="text-red-500 font-black tracking-[0.2em] text-xs uppercase">{course.subtitle}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase mb-6">
                            {course.title}
                        </h1>
                        <p className="text-xl text-slate-300 font-bold uppercase tracking-wide">
                            {course.institution}
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content + Sidebar Layout */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-3 gap-16">

                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-20">

                        {/* Overview & Description */}
                        <section className="animate-fade-in-up">
                            {course.tagline && (
                                <h3 className="text-red-600 font-black text-xl uppercase tracking-wider mb-4">{course.tagline}</h3>
                            )}
                            <div className="prose prose-slate max-w-none">
                                <p className="text-2xl text-slate-900 leading-relaxed font-black mb-8">
                                    {course.description}
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    {course.details}
                                </p>
                            </div>
                        </section>

                        {/* Program Objectives */}
                        {course.objectives && (
                            <section className="animate-fade-in-up">
                                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-tighter">
                                    <span className="w-10 h-1 bg-red-600 rounded-full"></span>
                                    Programme Objectives
                                </h2>
                                <div className="grid gap-4">
                                    {course.objectives.map((obj, i) => (
                                        <div key={i} className="flex gap-6 items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-600/20 transition-all group">
                                            <div className="text-3xl font-black text-slate-200 group-hover:text-red-600/20 transition-colors">0{i + 1}</div>
                                            <p className="text-lg font-bold text-slate-700 leading-tight">{obj}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Courses Offered (for Career Excellence) */}
                        {course.coursesOffered && (
                            <section className="animate-fade-in-up">
                                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-tighter">
                                    <span className="w-10 h-1 bg-red-600 rounded-full"></span>
                                    Courses Offered
                                </h2>
                                <div className="space-y-8">
                                    {course.coursesOffered.map((co, i) => (
                                        <div key={i} className="p-8 bg-white border border-slate-200 rounded-4xl shadow-sm hover:shadow-md transition-shadow">
                                            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{co.title}</h3>
                                            <p className="text-slate-600 font-medium mb-6">{co.description}</p>
                                            {co.subItems && (
                                                <ul className="grid sm:grid-cols-1 gap-3">
                                                    {co.subItems.map((si, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-slate-800 font-bold">
                                                            <ChevronRight className="text-red-600 shrink-0 mt-1" size={18} />
                                                            <span>{si}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Specializations (Detailed) */}
                        {course.specializations && (
                            <section className="animate-fade-in-up">
                                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-tighter">
                                    <span className="w-10 h-1 bg-red-600 rounded-full"></span>
                                    Course Focus
                                </h2>
                                <div className="grid gap-10">
                                    {course.specializations.map((spec, i) => (
                                        <div key={i} className="group">
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-wide">{spec.title}</h3>
                                                {spec.partner && (
                                                    <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-4 py-1.5 rounded-lg uppercase tracking-[0.2em]">{spec.partner}</span>
                                                )}
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {spec.focus.map((f, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group-hover:border-red-600/10 transition-colors">
                                                        <CheckCircle2 size={16} className="text-red-600 shrink-0" />
                                                        <span className="text-sm font-bold text-slate-700">{f}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Program Structure / Curriculum */}
                        {course.structure && (
                            <section className="animate-fade-in-up">
                                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-tighter">
                                    <span className="w-10 h-1 bg-red-600 rounded-full"></span>
                                    Programme Structure
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {course.structure.map((item, i) => (
                                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-600 transition-all flex flex-col items-center text-center">
                                            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-widest leading-tight min-h-[3em] flex items-center">{item.title}</h4>
                                            <ul className="space-y-3 w-full">
                                                {item.items.map((li, idx) => (
                                                    <li key={idx} className="text-xs text-slate-500 font-black uppercase tracking-wider bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                        {li}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Academic Environment */}
                        {course.environment && (
                            <section className="animate-fade-in-up">
                                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-tighter">
                                    <span className="w-10 h-1 bg-red-600 rounded-full"></span>
                                    Academic Environment
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {course.environment.map((env, i) => (
                                        <div key={i} className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                                                <School size={18} />
                                            </div>
                                            <span className="text-sm font-bold text-slate-700 leading-tight">{env}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="">
                        <div className="sticky top-32 space-y-8">

                            {/* Quick Info Sidebar - High Readability Material Design */}
                            <div className="bg-white border-2 border-slate-100 rounded-xl shadow-xl shadow-slate-200/50 overflow-hidden animate-fade-in-right">
                                <div className="bg-slate-900 p-6 text-white">
                                    <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                                        <Info size={20} className="text-red-500" />
                                        Programme Info
                                    </h3>
                                </div>

                                <div className="p-8 space-y-6">
                                    {/* Info Items */}
                                    <div className="grid gap-6">
                                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-red-600">
                                                <Users size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Target Classes</p>
                                                <p className="text-sm font-black text-slate-900">{course.classes}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-red-600">
                                                <Calendar size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Enrolment Year</p>
                                                <p className="text-sm font-black text-slate-900">2026-2027</p>
                                            </div>
                                        </div>

                                        {course.eligibility && (
                                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-red-600">
                                                    <Rocket size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Eligibility</p>
                                                    <p className="text-[12px] font-bold text-slate-700 leading-tight uppercase">{course.eligibility}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-6 border-t border-slate-100">
                                        <button
                                            onClick={() => window.open('https://winningedgecareer.opensourcecrm.in/forms/wtl/b6f7f506fcc2a8ad5f0d592b715c8850?styled=1', '_blank')}
                                            className="w-full py-4 bg-red-600 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-red-900/20 hover:bg-red-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
                                        >
                                            Enrol Now <ArrowRight size={16} />
                                        </button>
                                        <p className="mt-4 text-[10px] font-black text-slate-400 text-center uppercase tracking-widest leading-relaxed">
                                            {course.contact}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Delivery / Support Card */}
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">Institutional Support</p>
                                <p className="text-xs text-slate-600 font-bold italic leading-relaxed">
                                    {course.note}
                                </p>
                            </div>

                            {/* Website Support */}
                            <div className="p-6 text-center border border-slate-100 rounded-xl bg-white flex items-center justify-center gap-4">
                                <Globe className="w-6 h-6 text-slate-300" />
                                <p className="text-[11px] font-black text-slate-900 tracking-tight uppercase">
                                    {course.website || "www.sjsschool.co.in"}
                                </p>
                            </div>

                        </div>
                    </aside>

                </div>
            </main>

            <Footer />
        </div>
    );
}
