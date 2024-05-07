import { Form } from "react-router-dom";
import shopping from "../assets/shopping-animate.svg";

export const Login = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div>
          <h1 className="text-5xl font-semibold text-orange-500">Welcome back</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">Please, enter your details.</p>
          <Form className="mt-8 flex flex-col">
            <label>
              <span className="text-lg font-medium">Email:</span>
              <input type="email" name="email" placeholder="Enter your email"/>
            </label>
            <label>
              <span>Password:</span>
              <input type="password" name="password" placeholder="Enter your password"/>
            </label>
          </Form>
        </div>
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <img src={shopping} className="w-full" />
      </div>
    </div>
  );
};
