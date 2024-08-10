import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext"

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        try {
            const { password: _, authData } = await login(email, password);
            changeAuthState(authData);
            return authData;
        } catch (error) {
            console.error('Login failed:', error);
            throw error; 
        }
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        try {
            const { password: _, ...authData } = await register(email, password);
            changeAuthState(authData);
            return authData;
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };

    return registerHandler;
};