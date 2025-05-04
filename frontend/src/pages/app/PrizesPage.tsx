import { useState } from "react";
import ObtainedPrizeCard from "../../components/ObtainedPrizeCard";
import PrizeCard from "../../components/PrizeCard";

const PrizePage = () => {
    const [obtainedPrize, setObtainedPrize] = useState(false);

    const handleObtainedPrize = () => {
        setObtainedPrize(!obtainedPrize);
    };

    if (obtainedPrize) { // quando verdadeiro, retorna somente os prêmios obtidos.
        return (
            <div>
                <div className="flex items-center justify-between">
                    <h1 className="text-heading-1 font-semibold font-montserrat">Prêmios</h1>
                    <button className="flex justify-center items-center bg-(--color-app-primary) rounded-(--radius-app-big) w-[140px] h-[35px] text-white text-body-1 font-medium">Criar prêmio +</button>
                </div>

                <hr className="mb-4" />

                <div className="flex gap-2 mb-8">
                    <button onClick={handleObtainedPrize} className="bg-(--color-app-detail)/25 w-[160px] rounded-(--radius-app-default) text-black font-medium py-1">Todos os prêmios</button>
                    <button className="bg-linear-to-r from-[#00C950] via-[#10D960] to-[#00C950] w-[160px] rounded-(--radius-app-default) text-white font-medium py-1">Prêmios obtidos</button>
                </div>

                <div className="flex flex-col gap-4">
                    <ObtainedPrizeCard />
                    <ObtainedPrizeCard />
                    <ObtainedPrizeCard />
                </div>

            </div>
        );
    } // Caso falso, retorna todos os prêmios

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-heading-1 font-semibold font-montserrat">Prêmios</h1>
                <button className="flex justify-center items-center bg-(--color-app-primary) rounded-(--radius-app-big) w-[140px] h-[35px] text-white text-body-1 font-medium">Criar prêmio +</button>
            </div>
            
            <hr className="mb-4" />

            <div className="flex gap-2 mb-8">
                {/* Todos os prêmios */}
                <button className="bg-linear-to-r from-[#00C950] via-[#10D960] to-[#00C950] w-[160px] rounded-(--radius-app-default) text-white font-medium py-1">Todos os prêmios</button>

                {/* Prêmios obtidos */}
                <button onClick={handleObtainedPrize} className="bg-(--color-app-detail)/25 w-[160px] rounded-(--radius-app-default) text-black font-medium py-1">Prêmios obtidos</button>
            </div>

            <div className="flex flex-col gap-4">
                <PrizeCard />
                <PrizeCard />
            </div>

            <div className="flex items-center opacity-50 my-4">
                <hr className="flex-1 border-app-detail/50" />
                <p className="text-sm mx-[12px]"> Prêmios conquistados </p>
                <hr className="flex-1 border-app-detail/50" />
            </div>

            <div className="flex flex-col gap-4">
                <ObtainedPrizeCard />
                <ObtainedPrizeCard />
                <ObtainedPrizeCard />
            </div>
        </div>
    );

};

export default PrizePage;