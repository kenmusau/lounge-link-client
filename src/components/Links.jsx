import { Link } from "react-router-dom";
import "../pages/Home.css";

function Links() {
  return (
    <div>
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
            Services
          </a>
        </li>

        <li>
          <a className="home-nav-link" href="#">
            Contact
          </a>
        </li>
        {/* <li>
              <a className="home-nav-link home-nav--admin" href="#">
                Admin
              </a>
            </li> */}
        <li>
          <Link to="/login" className="home-nav-link home-nav--login" href="#">
            Log In
          </Link>
        </li>
        <li>
          <Link to="/signup" className="home-nav-link home-nav--cta" href="#">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Links;
