import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
