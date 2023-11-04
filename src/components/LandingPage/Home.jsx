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
                Admin
              </a>
            </li>
            <li>
              <a className="home-nav-link" href="#">
                Log in
              </a>
            </li>
            <li>
              <a className="home-nav-link" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Home;
