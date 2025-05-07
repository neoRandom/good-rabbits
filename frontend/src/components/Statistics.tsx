import moon from "../assets/media/icons/moon.png";
import fire from "../assets/media/icons/fire.png";
import water from "../assets/media/icons/water.png";
import foot from "../assets/media/icons/foot.png";


const Statistics = () => {

    const stats = [
        { bg: "bg-violet-700", bgLight: "bg-violet-700/30", value: "80", label: "mins", width: "w-1/2", img: moon },
        { bg: "bg-orange-400", bgLight: "bg-orange-400/30", value: "416", label: "cals", width: "w-1/3", img: fire },
        { bg: "bg-cyan-700", bgLight: "bg-cyan-700/30", value: "2", label: "L", width: "w-1/2", img: water },
        { bg: "bg-(--color-app-primary)", bgLight: "bg-(--color-app-primary)/30", value: "1600", label: "passos", width: "w-5/6", img: foot },
    ];


    return (
        <div className="flex flex-col gap-6 w-full bg-white rounded-(--radius-app-big) border border-(--color-app-detail)/25 shadow-(--shadow-app-neutral) p-4 mx-auto mb-16">
            <div className="flex justify-center">
                <h1 className="text-heading-2 font-medium font-montserrat text-center break-words">Suas Estatísticas</h1>
            </div>

            <hr className="border-[#606060] mb-4" />

            {stats.map(({ bg, bgLight, value, label, width, img }, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 w-full">
                    <div className="flex items-center gap-2 flex-1">
                        <div className={`flex justify-center items-center h-[30px] aspect-square ${bgLight} rounded-full`}>
                            <img src={img} alt="icon" className="w-[22px] h-[22px] object-contain" />
                        </div>
                        <h3 className="text-body-3 text-[var(--color-app-detail)] font-medium flex-wrap">
                            <span className="text-heading-3 text-black">{value} </span>{label}
                        </h3>
                    </div>

                    <div className={`w-full sm:w-1/2 h-[8px] rounded-[var(--radius-app-big)] ${bgLight}`}>
                        <div className={`${width} h-full rounded-[var(--radius-app-big)] ${bg}`}></div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Statistics;