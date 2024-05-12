import { useForm } from "react-hook-form";
import "./signup.css";
import { baseurl } from "../../utils";
import { Link } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiApple } from "react-icons/si";

function SignUp() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const user = {
      username: data.username,
      first_name: data.First_name,
      last_name: data.last_name,
      password: data.password,
    };

    fetch(`${baseurl}/users`, {
      method: "POST",
      headers: {
        Authorization: `Bearer my_s3cr3t`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then((data) => {
        // save the token to localStorage for future access
        localStorage.setItem("jwt", data.jwt);
        // save the user somewhere (in state!) to log the user in
        // setUser(data.user);
      });
  }
  return (
    <div className="client-signup-container">
      <div className="image-container">
        <div className="image">
          <blockquote>
            <p>
              Discover your perfect getaway with ease. Sign up now and unlock a
              world of unforgettable travel experiences!
            </p>
          </blockquote>
        </div>
      </div>
      <div className="signup-form-container">
        <div className="heading">
          <h1>Create Your Account</h1>
          <p>
            Sign up now and <span>follow your dreams</span>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="client-signup">
          <div className="input-names">
            <input
              type="text"
              name="First_name"
              id="First_name"
              placeholder="First Name"
              {...register("First_name")}
            />

            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
              {...register("last_name")}
            />
          </div>

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
            placeholder="*********"
            {...register("password")}
          />

          <button className="form-submit">Create Your Account</button>
          <p className="login-redirect">
            Already have an account? <Link to="/login"> Log in</Link>
          </p>
        </form>
        <div className="divider">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className="signup-socials">
          <FaGoogle className="icon" />
          <FaFacebook className="icon" />
          <SiApple className="icon" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
