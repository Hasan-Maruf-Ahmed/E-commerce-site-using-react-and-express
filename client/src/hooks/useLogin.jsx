import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";

export const useLogin = () => {
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (requestData) => {
    // setError(null);
    setIsLoading(true);
    try {
      const response = await axios.post("/login", requestData);
      const json = response.data;
      console.log(json);
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      toast.success(json.message);
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      // setError(err.response?.data?.message || err.message);
      toast.error(err.response?.data?.message || err.message);
    }
  };
  // const clearError = () => {
  //   setError(null);
  // };
  return { login, isLoading };
};
