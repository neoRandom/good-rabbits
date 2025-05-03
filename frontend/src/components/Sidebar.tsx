import logo from "../../../docs/header02.png";
import home from "../../../docs/icons/sidebar/black-home.svg";
import target from "../../../docs/icons/sidebar/white-target.svg";
import medal from "../../../docs/icons/sidebar/black-medal.svg";
import profile from "../../../docs/icons/black-profile.svg";
import settings from "../../../docs/icons/sidebar/black-settings.svg";

const Sidebar = () => {
    return (
        <div className="hidden md:flex flex-col items-center justify-between h-full w-[55px] bg-white py-4">
            <img src={logo} alt="IMG" />

            <div className="flex flex-col gap-4">
                <button className="flex justify-center w-[45px] h-[45px] border border-[#606060]/50 rounded-[10px]">
                    <img src={home} alt="" className="w-[24px]"/>
                </button>
                <button className="flex justify-center w-[45px] h-[45px] border border-[#606060]/50 rounded-[10px] bg-[#00C950]">
                    <img src={target} alt="" className="w-[24px]"/>
                </button>
                <button className="flex justify-center w-[45px] h-[45px] border border-[#606060]/50 rounded-[10px]">
                    <img src={medal} alt="" className="w-[24px]"/>
                </button>
                <button className="flex justify-center w-[45px] h-[45px] border border-[#606060]/50 rounded-[10px]">
                    <img src={profile} alt="" className="w-[24px]"/>
                </button>
            </div>

            <button className="flex justify-center w-[45px] h-[45px] border border-[#606060]/50 rounded-[10px]">
                <img src={settings} alt="" className="w-[24px]" />
            </button>

        </div>
    );
};

export default Sidebar;