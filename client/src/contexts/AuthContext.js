import { createContext } from "react";

export const AuthContext = createContext({
    email: '', 
    accesToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
});