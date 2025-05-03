import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="w-full h-screen">
            <Outlet />
        </div>
    )
}

export default AppLayout;
