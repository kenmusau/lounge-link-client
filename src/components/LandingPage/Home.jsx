import "./Home.css";
// import { CiLocationOn } from "react-icons/ci";

import Header from "./Header";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import PopularSection from "./PopularSection";
import TestimonialSection from "./TestimonialSection";
import ServiceSection from "./ServiceSection";

function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <PopularSection />
        <TestimonialSection />
        <ServiceSection />
      </main>
    </div>
  );
}

export default Home;
