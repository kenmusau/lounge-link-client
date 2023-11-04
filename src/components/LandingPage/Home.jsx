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
            <div className="hero-text-box">text</div>
            <div className="hero-image-box">image</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
