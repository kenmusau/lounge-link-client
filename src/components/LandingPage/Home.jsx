import "./Home.css";

import heroImage from "../../assets/hero2.jpg";

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
                Discover Peaceful Escape gateways to Tranquil Retreats and
                Comfort
              </h1>
              <p className="hero-description">
                Unlock the Ultimate Relaxation Experience and discover
                Comfortable Lounges, Where You Can Unwind, Connect, and Make
                Every Moment Count.
              </p>
              <a href="#">Book Now</a>
            </div>
            <div className="hero-image-box">
              <img src={heroImage} alt="A photo of beach scenary" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
