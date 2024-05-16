import { Form } from "react-router-dom";
import newEntry from "../assets/newEntry-animate.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, []);
  return (
    <div className="w-full h-screen flex">
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <img src={`${newEntry}?${key}`} className="w-full" />
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="w-3/5 bg-white px-16 py-14 rounded-3xl border-2 border-gray-200 shadow-2xl">
          <h1 className="text-4xl font-semibold text-orange-500">
            Create your account
          </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please, enter your details.
          </p>
          <Form className="mt-6 flex flex-col" method="post" action="/signup">
            <label>
              <span className="text-lg font-medium">Name:</span>
              <input
                className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent focus:border-orange-500/50 focus:outline-none"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </label>
            <label>
              <span className="text-lg font-medium">Phone Number:</span>
              <input
                className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent focus:border-orange-500/50 focus:outline-none"
                type="tel"
                name="phone"
                placeholder="Enter your phone-number"
              />
            </label>
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
            <button className="mt-6 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-2 rounded-full bg-orange-500 text-white text-lg font-bold">
              Sign up
            </button>
          </Form>
          <div className="mt-6 flex justify-center items-center">
            <p className="font-medium text-sm">Already have an account?</p>
            <p className="font medium text-sm text-orange-500 ml-2">
              <NavLink to="/login">Login</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const signupAction = async ({ request }) => {

  const data = await request.formData();

  const submission = {
    name: data.get('name'),
    phone: data.get('phone'),
    email: data.get('email'),
    password: data.get('password')
  }
  console.log(submission);
  return null;
}