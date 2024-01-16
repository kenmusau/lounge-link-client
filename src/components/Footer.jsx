import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import { SiTiktok } from "react-icons/si";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="#" className="home-logo">
            Lou<span>nge</span>
          </a>
          <p>
            Unlock the Ultimate Relaxation Experience and discover Comfortable
            Lounges, Where You Can Unwind and Connect.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <RiInstagramFill />
            <SiTiktok />
          </div>
        </div>

        <div className="footer-about-us">
          <h2>About Us</h2>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>

            <li>
              <a href="#">Channels</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">The Team</a>
            </li>
          </ul>
        </div>

        <div className="footer-about-us">
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>

            <li>
              <a href="#">Channels</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">The Team</a>
            </li>
          </ul>
        </div>

        <div className="footer-about-us">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>

            <li>
              <a href="#">Channels</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">The Team</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
