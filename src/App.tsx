import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite font-inter text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

