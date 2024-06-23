import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { toast } from "react-toastify"

export const useSignup = () => {
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (requestData) => {
    // setError(null);
    setIsLoading(true);
    try {
      // console.log(requestData);
      const response = await axios.post("/signup", requestData);
      const json = response.data;
      console.log(json);
      setIsLoading(false);
      toast.success(json.message);
      navigate("/login");
    } catch (err) {
      setIsLoading(false);
      // setError(err.response?.data?.message || err.message);
      toast.error(err.response?.data?.message || err.message);
      // console.error(err);
    }
  };
  // const clearError = () => {
  //   setError(null);
  // };
  return { signUp, isLoading };
};
