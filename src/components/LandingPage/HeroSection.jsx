import "./Home.css";

// Partner log
import heroImage from "../../assets/hero3.jpg";

function HeroSection() {
  return (
    <section className="section-hero">
      <div className="container hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            Discover Peaceful <span>Escape Gateways</span> to Tranquil Retreats
            and Comfort
          </h1>
          <p className="hero-description">
            Unlock the Ultimate Relaxation Experience and discover Comfortable
            Lounges, Where You Can Unwind, Connect, and Make Every Moment Count.
          </p>
          <a href="#" className="btn hero-btn--cta">
            <span>Book Now</span> &rarr;
          </a>

          <div className="stats">
            <p className="number">120+</p>
            <p className="number">79+</p>
            <p className="text">Hotels</p>
            <p className="text">Apartments</p>
          </div>
        </div>
        <div className="hero-image-box">
          <img src={heroImage} alt="A photo of beach scenary" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
