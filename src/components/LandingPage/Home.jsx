import "./Home.css";
// import { CiLocationOn } from "react-icons/ci";

import Header from "./Header";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import PopularSection from "./PopularSection";
import TestimonialSection from "./TestimonialSection";
import ServiceSection from "./ServiceSection";
import Footer from "./Footer";

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
