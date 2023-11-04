import "./Home.css";
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
          <div className="container">
            <div className="hero-text-box">
              <h1 className="primiry-heading">
                Discover Peaceful Escapes with Lounge: Your Gateway to Tranquil
                Retreats and Comfort.
              </h1>
              <p className="hero-description">
                Unlock the Ultimate Relaxation Experience with LoungeLink. Your
                Gateway to Discovering Comfortable Lounges, Where You Can
                Unwind, Connect, and Make Every Moment Count. Start Your Journey
                to Relaxation Today.
              </p>
            </div>
            <div className="hero-image-box">
              <img src="../../assets/hero.jpg" alt="A photo of beach scenary" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
