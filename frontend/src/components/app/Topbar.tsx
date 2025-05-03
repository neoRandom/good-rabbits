import logo from "/media/header02.png";
import profile from "/media/icons/black-profile.svg";
import trophy from "/media/icons/trophy.png";
import fire from "/media/icons/fire.png";
import dice from "/media/icons/dice.svg";
import animal from "/media/icons/animal.png";


const Topbar = () => {
    return(
        <header className="sticky flex items-center justify-around bg-white w-full h-[48px] border-b border-app-detail/25 rounded-b-[20px] px-3 lg:gap-4 md:rounded-[20px] md:m-4">
            <img src={logo} alt="IMG" className="h-[47px] md:hidden" />

            <div className="flex items-center gap-4 text-sm md:ml-auto">
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
        </header>
    );
};

export default Topbar;