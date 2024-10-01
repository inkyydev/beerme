import React, { useEffect } from "react";

import "./App.css";
import "./Homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HeroSection from "./pages/HeroSection";
import InfoSection from "./pages/InfoSection";
import Tokenomics from "./pages/Tokenomics/Tokenomics";
import HowToBuy from "./pages/HowToBuy";
import Roadmap from "./pages/Roadmap";
import Mission from "./pages/Mission";
import Lottery from "./pages/Lottery";
import Faq from "./pages/Faq/Faq";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="fl-page">
        <Header />
        <main>
          <HeroSection />
          <InfoSection />
          <Tokenomics />
          <HowToBuy />
          <Roadmap />
          <Mission />
          <Lottery />
          <Faq />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
