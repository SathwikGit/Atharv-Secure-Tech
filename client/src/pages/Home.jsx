import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Team from "../components/Team";
import MissionVision from "../components/MissionVision";
import CoreValues from "../components/CoreValues";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <MissionVision />
      <CoreValues />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
