import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Bookmark, ArrowUpRight, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: About - Spanning 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <img src="/13.png" alt="WEDA Logo" className="w-16 h-16 object-contain" />
              <div>
                <h2 className="text-2xl font-black text-red-600 leading-none">WEDA</h2>
                <p className="text-[10px] font-bold text-slate-900 tracking-widest mt-1">THE WINNING EDGE<br />DEFENCE ACADEMY</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-7 text-justify pr-4">
              The Winning Edge, India's top defence and professional training institute, has been shaping
              future leaders since 2019. With expert coaching and structured learning, we've helped
              thousands succeed in defence exams, professional certifications, and leadership roles.
              Our flexible multi-mode learning approach—offline, online, and digital—ensures accessibility for all.
            </p>
          </div>

          {/* Column 2: Useful Links - Spanning 2 columns */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="text-red-600 font-bold text-lg mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-red-600">Useful Links</h3>
            <ul className="space-y-4">
              {['Sainik School', 'RMS', 'Navodaya', 'UPSS', 'RIMC', 'UPSC'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-red-600 transition-colors group">
                    <Bookmark className="w-4 h-4 text-red-400 group-hover:text-red-600 transition-colors" />
                    <span className="text-sm font-medium">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Institute - Spanning 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-red-600 font-bold text-lg mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-red-600">Our Institute</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About us', href: '#about' },
                { name: 'Contact us', href: '#contact' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms & Condition', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="flex items-center gap-3 text-slate-600 hover:text-red-600 transition-colors group">
                    <div className="bg-red-50 p-1 rounded group-hover:bg-red-100 transition-colors">
                      <ArrowUpRight className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch - Spanning 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-red-600 font-bold text-lg mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-red-600">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-slate-600 group">
                <div className="bg-red-50 p-2 rounded-lg group-hover:bg-red-100 transition-colors mt-1">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-sm font-medium mt-2">
                  <p>+91 7417920356, +91 8279860459, +91 7417656633</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-slate-600 group">
                <div className="bg-red-50 p-2 rounded-lg group-hover:bg-red-100 transition-colors mt-1">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <a href="mailto:customercare@thewinningedge.co.in" className="text-sm font-medium hover:text-red-600 break-all mt-1.5">
                  customercare@thewinningedge.co.in
                </a>
              </div>

              <div className="flex items-start gap-4 text-slate-600 group">
                <div className="bg-red-50 p-2 rounded-lg group-hover:bg-red-100 transition-colors mt-1">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm font-medium leading-relaxed mt-1.5">
                  The Winning Edge, Near Gupta Store, Sunderwala Raipur Road,
                  Dehradun, Uttarakhand - 248008
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-slate-900 font-bold text-sm mb-4">Social Handles</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 hover:-translate-y-1 transition-all duration-300 shadow-md shadow-red-200">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
          <p>© Copyrights 2025 The Winning Edge Defence Academy All rights reserved</p>
          <div className="flex items-center gap-1">
            <span>Designed and Managed With</span>
            <Heart className="w-3 h-3 fill-current text-white" />
            <span>By AdVenture LLP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
