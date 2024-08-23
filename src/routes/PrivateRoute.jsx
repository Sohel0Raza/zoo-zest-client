import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="text-center md:pt-40"><progress className="progress w-56"></progress></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}}></Navigate>
};

export default PrivateRoute;