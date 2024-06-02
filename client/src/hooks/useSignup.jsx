import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from '../axios';


export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (requestData) => {
      setIsLoading(true);
    try {
        console.log(requestData);
        const response = await axios.post('/signup', requestData, {
            headers: {
                'Content-Type': 'application/json',
            }
    });
        const json = response.data;
        console.log(json);
        setIsLoading(false);
        navigate('/login');
    } catch (err) {
        setIsLoading(false);
        setError(err.response?.data?.message || err.message);
        // console.error(err);
    }
  };
  const clearError = () => {
    setError(null);
  }
  return { signUp, error, isLoading, clearError };
}
