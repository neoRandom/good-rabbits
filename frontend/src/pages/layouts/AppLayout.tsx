import { Outlet } from "react-router-dom";
import Navbar from "../../components/app/Navbar";
import Topbar from "../../components/app/Topbar";

const AppLayout = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse w-full h-svh">
            <div className="flex-1 h-full bg-app-bg overflow-hidden">
                <Topbar />
                <div className="*:p-[16px] max-md:*:pb-[64px] h-full overflow-auto">
                    <Outlet />
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default AppLayout;
