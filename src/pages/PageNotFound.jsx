import "./pageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="page-not-found">
      <h1 className="error-code">404</h1>
      <div className="error-message">Page Not Found</div>
      <span className="go-home-button">
        <Link className="go-home-link" to="/">
          Home
        </Link>
      </span>
    </main>
  );
}

export default PageNotFound;
