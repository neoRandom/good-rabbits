import logo from "../../../docs/header02.png";
import profile from "../../../docs//icons/black-profile.svg";
import trophy from "../../../docs//icons/trophy.png";
import fire from "../../../docs//icons/fire.png";
import dice from "../../../docs/icons/dice.svg";
import animal from "../../../docs/icons/animal.png";


const Topbar = () => {
    return(
        <div className="flex items-center justify-around bg-white w-full h-[48px] border-b border-[#606060]/50 rounded-b-[20px] px-3  md:w-1/3 lg:w-1/4 lg:gap-4 md:rounded-[20px] md:m-4  md:border md:border-[#606060]/50 ">
            <img src={logo} alt="IMG" className="h-[47px] md:hidden" />

            <div className="flex items-center gap-4 text-sm">
                
                <div className="flex items-center">
                    <img src={trophy} alt="icon" className="2-[15px] h-[15px]"/> 1000
                </div>

                <div className="flex items-center">
                    <img src={fire} alt="icon" className="2-[15px] h-[15px]"/> 365  
                </div>

                <div className="flex items-center">
                    <img src={dice} alt="icon" className="2-[15px] h-[15px]"/> 3
                </div>

                <div className="flex items-center">
                    <img src={animal} alt="icon" className="2-[15px] h-[15px]"/> 3
                </div>

            </div>

            <div className="flex items-center lg:border-l border-solid lg:px-4">
                USER <img src={profile} alt="ProfileIcon" />
            </div>
        </div>
    );
};

export default Topbar;