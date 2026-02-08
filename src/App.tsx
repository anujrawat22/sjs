import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Videos } from './components/Videos';
import { Faculty } from './components/Faculty';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import CourseDetail from './pages/CourseDetail';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Videos />
      <Faculty />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/course/:slug" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
