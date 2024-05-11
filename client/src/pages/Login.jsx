import { Form } from "react-router-dom";
import shopping from "../assets/shopping-animate.svg";
import google from "../assets/google_g_icon.svg"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [key, setKey] = useState(Date.now());

    useEffect(() => {
        setKey(Date.now());
    }, []);
  return (
    <div className="w-full h-screen flex">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="w-3/5 bg-white px-16 py-14 rounded-3xl border-2 border-gray-200 shadow-2xl">
          <h1 className="text-4xl font-semibold text-orange-500">
            Welcome Back
          </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please, enter your details.
          </p>
          <Form className="mt-6 flex flex-col">
            <label>
              <span className="text-lg font-medium">Email:</span>
              <input
                className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent focus:border-orange-500/50 focus:outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </label>
            <label className="mt-2">
              <span>Password:</span>
              <input
                className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent focus:border-orange-500/50 focus:outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </label>
            <div className="mt-6 flex justify-between items-center">
              <label>
                <input type="checkbox" />
                <span className="ml-2 font-medium text-sm">
                  Remember for 30 days
                </span>
              </label>
              <button className="font-medium text-sm text-violet-500">
                Forgot password
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-2 rounded-full bg-orange-500 text-white text-lg font-bold">
                Sign in
              </button>
              <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-2 rounded-full border-2 border-gray-100">
                <img src={google} width={24} height={24}/>
                Sign in with Google</button>
            </div>
          </Form>
          <div className="mt-6 flex justify-center items-center">
            <p className="font-medium text-sm">Don't have an account?</p>
            <p className="font medium text-sm text-orange-500 ml-2"><NavLink to="/signup" >Sign up</NavLink></p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <img src={`${shopping}?${key}`} className="w-full" />
      </div>
    </div>
  );
};
