import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Darker from './sections/LandingPage/Darker';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Darker />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
