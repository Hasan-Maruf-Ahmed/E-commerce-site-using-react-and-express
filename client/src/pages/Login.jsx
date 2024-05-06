import { Form } from "react-router-dom"
import shopping from "../assets/shopping-animate.svg"

export const Login = () => {
  return (
    <div className="fixed inset-0 flex justify-between items-center">
      <div>
        <Form>
          <label>
            <span>Email:</span>
            <input type="email" name="email"></input>
          </label>
          <label>
            <span>Password:</span>
            <input type="password" name="password"></input>
          </label>
        </Form>
      </div>
      <div className="w-1/2">
        <img src={shopping} className="w-full"/>
      </div>
    </div>
  )
}
