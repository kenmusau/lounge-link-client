import "./Home.css";

// Partner log
import choice from "../../assets/patners/choice.png";
import wynn from "../../assets/patners/wynn.png";
import swiss from "../../assets/patners/swiss.png";
import lowes from "../../assets/patners/lowes.png";
import sofitel from "../../assets/patners/sofitel.png";

function FeatureSection() {
  return (
    <div>
      <section className="section-feature">
        <div className="container">
          <h2 className="heading-secondary feature-heading">Our Partners</h2>
          <div className="logos">
            <img className="feature-img" src={choice} alt="" />
            <img className="feature-img" src={wynn} alt="" />
            <img className="feature-img" src={sofitel} alt="" />
            <img className="feature-img" src={lowes} alt="" />
            <img className="feature-img" src={swiss} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureSection;
