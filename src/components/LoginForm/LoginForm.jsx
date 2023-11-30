import "./LoginForm.css";
import { useForm } from "react-hook-form";
import loginPic from "../../assets/loginPic.png";
import { baseurl } from "../../utils";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClientContext } from "../../context/Client";

function LoginForm() {
  // const [error, setError] = useState([]);
  const { register, handleSubmit } = useForm();

  const { setClient } = useContext(ClientContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = {
      username: data.username,
      password: data.password,
    };
    loginUser(user);
  };

  async function loginUser(user) {
    try {
      const response = await fetch(`${baseurl}/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();
      if (response.ok) {
        setClient(data.client);
        localStorage.setItem("jwt", data.jwt);
        console.log(data.client);
        navigate("/dashboard");
      } else {
        // setError(data?.error);
        console.log("error here", data);
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
          {/* {error.map((error, i) => (
            <p key={i} className="form-error">
              {error}
            </p>
          ))} */}
          <p>
            Have no account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
