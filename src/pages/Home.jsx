import "./Home.css";
// import { CiLocationOn } from "react-icons/ci";

import Header from "../components/LandingPage/Header";
import HeroSection from "../components/LandingPage/HeroSection";
import FeatureSection from "../components/LandingPage/FeatureSection";
import PopularSection from "../components/LandingPage/PopularSection";
import TestimonialSection from "../components/LandingPage/TestimonialSection";
import ServiceSection from "../components/LandingPage/ServiceSection";
import Footer from "../components/LandingPage/Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <PopularSection />
        <ServiceSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
