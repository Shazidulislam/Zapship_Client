import React from "react";
import { useForm } from "react-hook-form"


const Login = () => {

    const {register ,handleSubmit  , formState:{errors}} = useForm()

    const onSubmit =(data)=>{
        console.log(data)
    }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-medium">Login Now</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" {...register("email" , {required:true})} className="input" placeholder="Email" />
            {
                errors.email?.type === "required" && <p className="text-red-500">Email is Required!</p>
            }
            <label className="label">Password</label>
            <input type="password" {...register("password" , {required:true , minLength:8 ,})} className="input" placeholder="Password" />
           {
            errors.password?.type === "required" && <p className="text-red-600">Password is required!</p>
           }
           {
            errors.password?.type === "minLength" && <p className="text-red-600">Password id must be  charaters longer!</p>
           }
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
