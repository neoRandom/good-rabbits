import { useState } from "react";
import AchievementsList from "../../components/AchievemntsList";

const PrizePage = () => {
    const [showObtainedOnly, setShowObtainedOnly] = useState(false);

    return (
        <div className="min-h-screen overflow-auto px-4 py-6">
            {/* Título e botão de criar */}
            <div className="flex items-center justify-between mb-4 gap-2">
                <h1 className="text-heading-1 font-semibold font-montserrat">Conquista</h1>
                <button className="flex justify-center items-center bg-(--color-app-primary) rounded-(--radius-app-big) w-[140px] h-[35px] text-white text-body-1 font-medium sm:w-1/3">
                    Criar prêmio +
                </button>
            </div>

            <hr className="mb-4" />

            {/* Botões de filtro (apenas mobile) */}
            <div className="flex gap-2 mb-8 sm:hidden">
                <button
                    onClick={() => setShowObtainedOnly(false)}
                    className={`w-[160px] rounded-(--radius-app-default) py-1 font-medium ${
                        !showObtainedOnly
                            ? "bg-gradient-to-r from-[#00C950] via-[#10D960] to-[#00C950] text-white"
                            : "bg-(--color-app-detail)/25 text-black"
                    }`}
                >
                    Todos os prêmios
                </button>
                <button
                    onClick={() => setShowObtainedOnly(true)}
                    className={`w-[160px] rounded-(--radius-app-default) py-1 font-medium ${
                        showObtainedOnly
                            ? "bg-gradient-to-r from-[#00C950] via-[#10D960] to-[#00C950] text-white"
                            : "bg-(--color-app-detail)/25 text-black"
                    }`}
                >
                    Prêmios obtidos
                </button>
            </div>

            {/* Layout em colunas para telas maiores */}
            <div className="flex flex-col sm:flex-row sm:gap-8">
                {!showObtainedOnly && (
                    <>
                        <div className="flex flex-col gap-4 flex-1">
                            <h2 className="hidden sm:flex text-heading-4 font-medium text-(--color-app-detail)/75">
                                Conquistas em progresso
                            </h2>
                            <AchievementsList filter="inProgress" />
                        </div>

                        <div className="flex items-center opacity-50 my-4">
                            <hr className="flex-1 border border-(--color-app-detail)/50 sm:hidden" />
                            <p className="text-body-3 font-medium mx-[12px] sm:hidden"> Conquistas obtidas </p>
                            <hr className="flex-1 border border-(--color-app-detail)/50 sm:hidden" />
                            <div className="hidden sm:block sm:w-[1px] h-full border border-(--color-app-detail)/50"></div>
                        </div>
                    </>
                )}

                <div className="flex flex-col gap-4 flex-1">
                    <h2 className="hidden sm:flex text-heading-4 font-medium text-(--color-app-detail)/75">
                        Conquistas obtidas
                    </h2>
                    <AchievementsList filter="obtained" />
                </div>
            </div>
        </div>
    );
};

export default PrizePage;
