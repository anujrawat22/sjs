import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const downloadBrochure = () => {
    window.open('/brochure.pdf', '_blank');
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = 'WEDA_Gurukool_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
    }
    setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
          <img src="/13.jpeg" alt="SJS Logo" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-none">WEDA Gurukool</h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <Link to="/#courses" onClick={(e) => handleNavClick(e, 'courses')} className="hover:text-red-600 transition-colors cursor-pointer">Courses</Link>
          <Link to="/#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-red-600 transition-colors cursor-pointer">About</Link>
          <Link to="/#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="hover:text-red-600 transition-colors cursor-pointer">Why Choose Us</Link>
          <Link to="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-red-600 transition-colors cursor-pointer">Contact</Link>
        </div>

        {/* Desktop Button */}
        <button
          className="hidden md:flex bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all text-sm items-center gap-2 cursor-pointer"
          onClick={downloadBrochure}
        >
          <span>Brochure</span>
          <Download className="w-4 h-4" />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-600 hover:text-red-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4 animate-fade-in-up">
          <Link to="/#courses" className="text-slate-600 hover:text-red-600 font-medium transition-colors" onClick={(e) => handleNavClick(e, 'courses')}>Courses</Link>
          <Link to="/#about" className="text-slate-600 hover:text-red-600 font-medium transition-colors" onClick={(e) => handleNavClick(e, 'about')}>About</Link>
          <Link to="/#why-us" className="text-slate-600 hover:text-red-600 font-medium transition-colors" onClick={(e) => handleNavClick(e, 'why-us')}>Why Choose Us</Link>
          <Link to="/#contact" className="text-slate-600 hover:text-red-600 font-medium transition-colors" onClick={(e) => handleNavClick(e, 'contact')}>Contact</Link>
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all text-sm flex items-center justify-center gap-2 w-full"
            onClick={() => {
              downloadBrochure();
              setIsOpen(false);
            }}
          >
            <span>Brochure</span>
            <Download className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}

