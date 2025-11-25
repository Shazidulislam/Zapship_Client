import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-medium">Register Now</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is Required!</p>
            )}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: {value:8 , message:" Password  must be 8 charaters longer!"} , pattern:{
                value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
                message:"Password must include upper, lower, number & special char"
              } })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required!</p>
            )}
            {errors.password && (
              <p className="text-red-600">
               {errors.password?.message}
              </p>
            )}
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
