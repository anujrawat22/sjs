import { GraduationCap } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/13.png" alt="SJS Logo" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="text-xl font-bold text-blue-900 leading-none">St Joseph's School</h1>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Saharanpur</p>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-900 transition-colors">About</a>
          <a href="#courses" className="hover:text-blue-900 transition-colors">Courses</a>
          <a href="#why-us" className="hover:text-blue-900 transition-colors">Why Choose Us</a>
          <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
        </div>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all text-sm">
          Register Now
        </button>
      </div>
    </nav>
  );
}
