import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="h-screen flex flex-col">
            <Outlet />

            <Toaster />
        </div>
    )
}

export default Layout;
