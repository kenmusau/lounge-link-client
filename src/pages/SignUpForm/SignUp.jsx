import { useForm } from "react-hook-form";
import "./signup.css";
import { baseurl } from "../../utils";

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
      <form onSubmit={handleSubmit(onSubmit)} className="client-signup">
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          {...register("username")}
        />

        <label htmlFor="First_name">First name</label>
        <input
          type="text"
          name="First_name"
          id="First_name"
          {...register("First_name")}
        />

        <label htmlFor="last_name">last name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          {...register("last_name")}
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password")}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
