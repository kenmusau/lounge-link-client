import "./Home.css";

function Header() {
  return (
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
          {/* <li>
              <a className="home-nav-link home-nav--admin" href="#">
                Admin
              </a>
            </li> */}
          <li>
            <a className="home-nav-link home-nav--login" href="#">
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
  );
}

export default Header;
