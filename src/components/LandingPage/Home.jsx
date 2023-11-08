import "./Home.css";

// Partner log
import heroImage from "../../assets/hero2.jpg";
import choice from "../../assets/patners/choice.png";
import wynn from "../../assets/patners/wynn.png";
import swiss from "../../assets/patners/swiss.png";
import lowes from "../../assets/patners/lowes.png";
import sofitel from "../../assets/patners/sofitel.png";

// Popular Hotels

import hotel from "../../assets/hotels/hotel-1.jpg";
import hotel2 from "../../assets/hotels/hotel-2.jpg";
import hotel3 from "../../assets/hotels/hotel-3.jpg";
import hotel4 from "../../assets/hotels/hotel-4.jpg";
import hotel5 from "../../assets/hotels/hotel-5.jpg";

function Home() {
  return (
    <div className="home">
      <header className="home-section-header">
        <a href="#" className="home-logo">
          Lou<span>nge</span>
        </a>
        <nav className="home-nav">
          <ul className="home-nav-list">
            <li>
              <a className="home-nav-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="home-nav-link" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="home-nav-link" href="#">
                services
              </a>
            </li>

            <li>
              <a className="home-nav-link" href="#">
                contact
              </a>
            </li>
            <li>
              <a className="home-nav-link home-nav--admin" href="#">
                Admin
              </a>
            </li>
            <li>
              <a className="home-nav-link" href="#">
                Log In
              </a>
            </li>
            <li>
              <a className="home-nav-link home-nav--cta" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="section-hero">
          <div className="container hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                Discover Peaceful <span>Escape Gateways</span> to Tranquil
                Retreats and Comfort
              </h1>
              <p className="hero-description">
                Unlock the Ultimate Relaxation Experience and discover
                Comfortable Lounges, Where You Can Unwind, Connect, and Make
                Every Moment Count.
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
        <section className="section-popular">
          <div className="container">
            <h2 className="heading-secondary popular-heading">
              Our Most Popular Selections
            </h2>
            <div className="popular-hotels">
              <div className="popular-hotel-data">
                <img src={hotel} alt="hotel one image" />
                <div className="hotel-text">
                  <p className="hotel-name">Ice Hotel</p>
                  <p className="hotel-location">Athiriver, Kajiado</p>
                  <p className="hotel-price">$500 Per Night</p>
                </div>
              </div>
              <div className="popular-hotel-data">
                <img src={hotel2} alt="hotel one image" />
                <div className="hotel-text">
                  <p className="hotel-name">Gates Hotel</p>
                  <p className="hotel-location">Kitengela, Kajiado</p>
                  <p className="hotel-price">$500 Per Night</p>
                </div>
              </div>
              <div className="popular-hotel-data">
                <img src={hotel4} alt="hotel one image" />
                <div className="hotel-text">
                  <p className="hotel-price">$500 Per Night</p>
                  <p className="hotel-name">Sarova Hotel</p>
                  <p className="hotel-location">Kinoo, Kiambu</p>
                </div>
              </div>

              <div className="popular-hotel-data">
                <img src={hotel5} alt="hotel one image" />
                <div className="hotel-text">
                  <p className="hotel-name">Ice Hotel</p>
                  <p className="hotel-location">Athiriver, Kajiado</p>
                  <p className="hotel-price">$500 Per Night</p>
                </div>
              </div>
              <div className="popular-hotel-data">
                <img src={hotel2} alt="hotel one image" />
                <div className="hotel-text">
                  <p className="hotel-name">Gates Hotel</p>
                  <p className="hotel-location">Kitengela, Kajiado</p>
                  <p className="hotel-price">$500 Per Night</p>
                </div>
              </div>
              <div className="popular-hotel-data">
                <img src={hotel3} alt="hotel one image" />
                <div className="hotel-text">
                  <p className="hotel-price">$500 Per Night</p>
                  <p className="hotel-name">Sarova Hotel</p>
                  <p className="hotel-location">Kinoo, Kiambu</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-testimonials"></section>
        <section className="section-services"></section>
      </main>
    </div>
  );
}

export default Home;
