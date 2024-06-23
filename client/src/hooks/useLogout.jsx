import { useAuthContext } from '../hooks/useAuthContext';
import { toast } from "react-toastify";

export const useLogout =  () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        localStorage.removeItem('user');

        dispatch({ type: 'LOGOUT' });
        toast.success("Logout Successful")
    }
    return { logout };
}