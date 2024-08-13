import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function AuthGuard() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated 
        ? <Outlet />
        : <Navigate to="/login"/>;
}