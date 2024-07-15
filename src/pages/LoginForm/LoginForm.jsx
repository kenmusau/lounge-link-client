import "./LoginForm.css";
import { useForm } from "react-hook-form";
// import loginPic from "../../assets/loginPic.png";
// import { baseurl } from "../../utils";

import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

// icons
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import { IoMdHome } from "react-icons/io";

function LoginForm() {
  // const [error, setError] = useState([]);
  const { register, handleSubmit } = useForm();

  const { loginUser } = useUser();

  // const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const user = {
      username: data.username,
      password: data.password,
    };
    loginUser(user);
  };

  // async function loginUser(user) {
  //   try {
  //     const response = await fetch(`${baseurl}/login`, {
  //       method: "POST",
  //       body: JSON.stringify(user),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       const user = data.user;
  //       localStorage.setItem("jwt", data.jwt);
  //       if (user.role === "admin") {
  //         setUser(user);
  //         setIsAuthenticated(true);
  //         console.log(user.role);
  //         isAuthenticated && navigate("/adminDash", { replace: true });
  //       } else {
  //         setUser(user);
  //         setIsAuthenticated(true);
  //         console.log(user.role);
  //         isAuthenticated && navigate("/app", { replace: true });
  //       }
  //     } else {
  //       // setError(data?.error);
  //       console.log("error here", data);
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //   }
  // }

  return (
    <section className="login-form-section">
      <div className="login-form-container">
        <div className="login-image">
          <img src="loginpic1.jpg" alt="Login illustration" />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="back-home">
              <IoMdHome />
              <Link to="/">Home</Link>
            </div>
            <div className="form-title">
              <h2 className="form-heading">Welcome Back!</h2>
              <p className="heading-description">
                Dive into a world of comfort and relaxation. <br />
                Unlock your dream vacation!
              </p>
            </div>
            <div className="form-inputs">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                {...register("username")}
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                {...register("password")}
              />

              <div className="reset-password">
                <p>Forgot Password?</p>
              </div>
              <div className="form-submit">
                <button>Login</button>
              </div>
            </div>

            <div className="login-with-socials">
              <div className="cont-with-divider">
                <hr />
                <p>or continue with</p>
                <hr />
              </div>
              <div className="socials">
                <FaGoogle className="icon" />
                <FaFacebook className="icon" />
                <SiApple className="icon" />
              </div>
            </div>

            {/* {error.map((error, i) => (
            <p key={i} className="form-error">
              {error}
            </p>
          ))} */}
            <div className="sign-up-redirect">
              <p>
                Not a member?{" "}
                <Link to="/signup">
                  <span>Register Now</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
