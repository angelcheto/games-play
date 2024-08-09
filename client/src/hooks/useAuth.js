// import { useContext } from "react";
import { login } from "../api/auth-api";
// import { AuthContext } from "../contexts/AuthContext"

export const useLogin = () => {
    const loginHandler = async (email, password) => {
        try {    
        const result = await login(email, password);
            console.log(result);
        } catch (err) {
            console.log(err.message);
        }
    }

    return loginHandler;
};