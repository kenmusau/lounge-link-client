import "../pages/Home.css";

// Partner log
import choice from "../assets/patners/choice.png";
import wynn from "../assets/patners/wynn.png";
import swiss from "../assets/patners/swiss.png";
import lowes from "../assets/patners/lowes.png";
import sofitel from "../assets/patners/sofitel.png";

function FeatureSection() {
  return (
    <section className="section-feature">
      <div className="container">
        <h2 className="heading-secondary feature-heading">Our Partners</h2>
        <div className="logos">
          <img className="feature-img logo-1" src={choice} alt="" />
          <img className="feature-img logo-2" src={wynn} alt="" />
          <img className="feature-img logo-3" src={sofitel} alt="" />
          <img className="feature-img logo-4" src={lowes} alt="" />
          <img className="feature-img logo-5" src={swiss} alt="" />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
