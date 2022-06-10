import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Particle from "./Components/Particles/Particle";
import Portfolio from "./Components/Portfolio/Portfolio";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";

function App() {
  AOS.init({
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 500,
  });
  return (
    <div>
      <Particle />
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
