import { createContext, useContext, } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { useEffect } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '', 
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth', {});

    useEffect(() => {
        const isFirstTime = sessionStorage.getItem('first_time_opened') === null;

        if (isFirstTime) {
            setAuthState(null); 
            sessionStorage.setItem('first_time_opened', 'false');
        }
    }, []);

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const logout = () => {
        setAuthState(null);
    }

    const contextData = {
        userId: authState?._id,
        email: authState?.email, 
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout,
    };

      
    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const authData = useContext(AuthContext);
    return authData;
}