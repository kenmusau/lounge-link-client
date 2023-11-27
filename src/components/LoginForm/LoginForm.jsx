import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
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

        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
