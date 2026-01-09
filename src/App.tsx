import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Videos } from './components/Videos';
import { Faculty } from './components/Faculty';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <Hero />
      <Courses />
      <Videos />
      <Faculty />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
