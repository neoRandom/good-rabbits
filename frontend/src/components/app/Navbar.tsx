import logo from "/media/header02.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [selected, setSelected] = useState<number>(0);

    return (
        <div className="flex flex-row md:flex-col items-center justify-between h-[55px] w-full md:h-full md:w-[55px] bg-white py-4 max-md:px-[16px]">
            <img src={logo} alt="Good Rabbits" className="max-md:hidden" />

            <div className="relative flex md:flex-col border border-app-detail/25 rounded-app-big">
                <div
                    className="md:hidden absolute w-1/4 h-full bg-app-primary transition-transform duration-300 rounded-app-big"
                    style={{
                        translate: `${100 * selected}% 0`,
                    }}
                ></div>
                <div
                    className="max-md:hidden absolute w-full h-1/4 bg-app-primary transition-transform duration-300 rounded-app-big"
                    style={{
                        translate: `0 ${100 * selected}%`,
                    }}
                ></div>

                <div
                    className="tooltip md:tooltip-right tooltip-primary font-medium"
                    data-tip="Home"
                >
                    <Link
                        to="/app"
                        onClick={() => setSelected(0)}
                        className="flex justify-center items-center w-[60px] md:w-[45px] h-[45px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill={selected == 0 ? "#FFFFFF" : "#000000"}
                        >
                            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                        </svg>
                    </Link>
                </div>
                <div
                    className="tooltip md:tooltip-right tooltip-primary font-medium"
                    data-tip="Metas"
                >
                    <Link
                        to="/app/goals"
                        onClick={() => setSelected(1)}
                        className="flex justify-center items-center w-[60px] md:w-[45px] h-[45px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill={selected == 1 ? "#FFFFFF" : "#000000"}
                        >
                            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z" />
                        </svg>
                    </Link>
                </div>
                <div
                    className="tooltip md:tooltip-right tooltip-primary font-medium"
                    data-tip="Prêmios"
                >
                    <Link
                        to="/app/challenges"
                        onClick={() => setSelected(2)}
                        className="flex justify-center items-center w-[60px] md:w-[45px] h-[45px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill={selected == 2 ? "#FFFFFF" : "#000000"}
                        >
                            <path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
                        </svg>
                    </Link>
                </div>
                <div
                    className="tooltip md:tooltip-right tooltip-primary font-medium"
                    data-tip="Perfil"
                >
                    <Link
                        to="/app"
                        onClick={() => setSelected(3)}
                        className="flex justify-center items-center w-[60px] md:w-[45px] h-[45px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill={selected == 3 ? "#FFFFFF" : "#000000"}
                        >
                            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                        </svg>
                    </Link>
                </div>
            </div>

            <button className="group flex justify-center items-center w-[45px] h-[45px] border border-app-detail/25 rounded-app-big active:bg-app-primary md:hover:bg-app-primary md:transition-colors md:duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-black group-active:fill-white md:group-hover:fill-white"
                >
                    <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                </svg>
            </button>
        </div>
    );
};

export default Navbar;
