import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
function PrivateUserRoute() {
    const { currentUser } = useSelector((state) => state.user);
    // return currentUser.isAdmin ? <Outlet /> : <Navigate to="/home" />;
    if (!currentUser.isAdmin) {
        return <Outlet />
    } else {
        <Navigate to="/home" />
    }
}

export default PrivateUserRoute;