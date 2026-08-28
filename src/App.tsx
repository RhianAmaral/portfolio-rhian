import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Technologies from './sections/Technologies';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Goals from './sections/Goals';
import Contact from './sections/Contact';
import { useReducedMotion } from './hooks/useReducedMotion';

export default function App() {
  const reducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={reducedMotion ? 'always' : 'never'}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Education />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
