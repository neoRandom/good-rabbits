import BarChart from "./BarChart";
import calendar from "../assets/media/icons/calendar.svg";
import whiteCalendar from "../assets/media/icons/white-calendar.svg";
import { useState } from "react";
import ChallengeCard from "./ChallengeCard";
import "cally";

const FirstDiv = () => {
    const [options, setOptions] = useState("Pontos");

    const handleOptions = (option: string) => {
        setOptions(option);
    };

    return (
        <div className="flex flex-col gap-2 w-full bg-white rounded-(--radius-app-default) border border-(--color-app-detail)/25 shadow-(--shadow-app-neutral) p-2">
            {/* Header */}
            <div className="flex gap-2 w-full lg:hidden">
                <button
                    type="button"
                    className={options === "Pontos"
                        ? "w-[85px] h-[32px] bg-linear-to-r from-(--color-app-primary) via-(--color-app-primary-light) to-(--color-app-primary) rounded-(--radius-app-big) shadow-(--shadow-app-neutral) text-white font-medium text-body-2"
                        : "w-[85px] h-[32px] bg-white rounded-(--radius-app-big) shadow-(--shadow-app-neutral) font-medium text-body-2"
                    }
                    onClick={() => handleOptions("Pontos")}
                >
                    Pontos
                </button>
                <button
                    type="button"
                    className={options === "Desafios"
                        ? "w-[85px] h-[32px] bg-linear-to-r from-(--color-app-primary) via-(--color-app-primary-light) to-(--color-app-primary) rounded-(--radius-app-big) shadow-(--shadow-app-neutral) text-white font-medium text-body-2"
                        : "w-[85px] h-[32px] bg-white rounded-(--radius-app-big) shadow-(--shadow-app-neutral) font-medium text-body-2"
                    }
                    onClick={() => handleOptions("Desafios")}
                >
                    Desafios
                </button>
                <div className="flex-1"></div>
                <button
                    className={options === "Calendario"
                        ? "flex justify-center items-center h-[32px] aspect-square rounded-full bg-(--color-app-primary) border border-(--color-app-secondary)"
                        : "flex justify-center items-center h-[32px] aspect-square rounded-full border border-(--color-app-primary-dark)"
                    }
                    onClick={() => handleOptions("Calendario")}
                >
                    {options === "Calendario" ? (
                        <img src={whiteCalendar} alt="icon" />
                    ) : (
                        <img src={calendar} alt="icon" />
                    )}
                </button>
            </div>

            <div className="hidden lg:flex justify-center items-center w-full text-heading-1 font-medium font-montserrat">
                Bem-vindo de volta
            </div>

            <hr className="border-[#606060]/25 my-2" />

            {/* Content */}
            <div className="lg:grid grid-cols-3 gap-4">
                {/* Mostrar apenas o selecionado no mobile */}
                <div className={`lg:block ${options === "Pontos" ? "block" : "hidden"}`}>
                    <div className="w-full h-[300px]">
                        <BarChart />
                    </div>
                </div>
                <div className={`lg:block ${options === "Desafios" ? "block" : "hidden"}`}>
                    <div className="w-full p-4">
                        <ChallengeCard />
                    </div>
                </div>
                <div className={`lg:block ${options === "Calendario" ? "flex" : "hidden"} justify-center items-center`}>
                    <div className="w-full p-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                        {/* @ts-ignore */}
                        <calendar-date className="w-full bg-base-100 border border-base-300 shadow-(--shadow-app-neutral) rounded-box p-4 text-sm">
                            {/* @ts-ignore */}
                            <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                            </svg>
                            {/* @ts-ignore */}
                            <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                            </svg>
                            {/* @ts-ignore */}
                            <calendar-month class="w-full max-w-full overflow-x-auto" />
                            {/* @ts-ignore */}
                        </calendar-date>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FirstDiv;