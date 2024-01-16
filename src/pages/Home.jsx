import "./Home.css";
// import { CiLocationOn } from "react-icons/ci";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import PopularSection from "../components/PopularSection";
import TestimonialSection from "../components/TestimonialSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";

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
