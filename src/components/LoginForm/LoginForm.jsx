import "./LoginForm.css";
import { useForm } from "react-hook-form";
import loginPic from "../../assets/loginPic.png";
import { baseurl } from "../../utils";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const [error, setError] = useState([]);
  const { register, handleSubmit } = useForm();

  const navigate = Navigate();

  const onSubmit = (data) => {
    const user = {
      username: data.username,
      password: data.password,
    };
    loginUser(user);
  };

  async function loginUser(user) {
    try {
      const response = await fetch(`${baseurl}/clientLogin`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        navigate("/clientDashboard");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  return (
    <section className="login-form-section">
      <div className="login-form-container">
        <div className="login-image">
          <h2 className="image-login-heading">Welcome back</h2>
          <img src={loginPic} alt="Login illustration" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <h2 className="form-heading">Sign In</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            {...register("username")}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password")}
          />

          <button className="form-submit">Submit</button>
          {error.map((error, i) => (
            <p key={i} className="form-error">
              {error}
            </p>
          ))}
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
