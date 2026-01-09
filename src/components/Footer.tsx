export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img src="/13.png" alt="SJS Logo" className="w-16 h-16 object-contain" />
          <div className="text-left">
            <span className="text-white font-bold text-2xl block leading-none">St Joseph's School</span>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">Saharanpur</span>
          </div>
        </div>
        <p className="mb-6">Saharanpur, Uttar Pradesh</p>
        <p className="text-sm">© 2026 St Joseph's School Saharanpur. All rights reserved.</p>
      </div>
    </footer>
  );
}
