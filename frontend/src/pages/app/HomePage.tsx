import moon from "../../assets/media/icons/moon.png";
import fire from "../../assets/media/icons/fire.png";
import water from "../../assets/media/icons/water.png";
import foot from "../../assets/media/icons/foot.png";
import calendar from "../../assets/media/icons/calendar.svg";

const HomePage = () => {
    return (
        <main className="flex flex-col gap-[20px]">
            <div>
                <div className="flex flex-col gap-2 w-full bg-white rounded-(--radius-app-default) border border-(--color-app-detail)/25 shadow-(--shadow-app-neutral) p-2">
                    <div className="flex gap-2 w-full">
                        <button
                            type="button"
                            className="w-[75px] h-[32px] bg-linear-to-r from-(--color-app-primary) via-(--color-app-primary-light) to-(--color-app-primary) rounded-(--radius-app-big) shadow-(--shadow-app-neutral) text-white font-medium text-body-2"
                        >
                            Pontos
                        </button>
                        <button
                            type="button"
                            className="w-[85px] h-[32px] bg-white rounded-(--radius-app-big) shadow-(--shadow-app-neutral) font-medium text-body-2"
                        >
                            Desafios
                        </button>
                        <div className="flex-1"></div>
                        <button className="flex justify-center items-center h-[32px] aspect-square rounded-full border border-(--color-app-primary-dark)">
                            <img src={calendar} alt="icon" />
                        </button>
                    </div>

                    <hr className="border-[#606060]/25" />

                    <div className="w-full h-[160px] bg-neutral-300 text-heading-1 font-medium p-4">
                        Tela que ainda falta fazer :P
                    </div>
                </div>

                <div className="flex gap-[16px] mt-2">
                    <button
                        type="button"
                        className="w-[156px] h-[32px] bg-white rounded-(--radius-app-default) shadow-(--shadow-app-neutral) font-medium text-body-2"
                    >
                        Minhas Metas
                    </button>
                    <button
                        type="button"
                        className="w-[156px] h-[32px] bg-white rounded-(--radius-app-default) shadow-(--shadow-app-neutral) font-medium text-body-2"
                    >
                        Meus Prêmios
                    </button>
                </div>
            </div>

            <hr className="border-[#606060]/25" />

            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="h-[16px] aspect-square bg-green-500 rounded-full"></div>
                    <h2 className="text-heading-4">Pontuação</h2>
                </div>

                <div className="flex">
                    <p className="flex-1 font-medium text-[64px] h-[52px] leading-[52px]">
                        1.000
                    </p>

                    <div className="flex flex-col justify-center items-center">
                        <button
                            type="button"
                            className="w-[110px] h-[32px] bg-linear-to-r from-(--color-app-primary) via-(--color-app-primary-light) to-(--color-app-primary) rounded-(--radius-app-default) shadow-(--shadow-app-neutral) text-white font-medium text-body-2"
                        >
                            Prêmios
                        </button>
                        <p className="text-body-4 text-(--color-app-detail)">
                            5 não resgatados
                        </p>
                    </div>
                </div>
            </div>

            <hr className="border-[#606060]/25" />

            <div className="flex gap-2 h-[120px] bg-white rounded-(--radius-app-default) p-3 border border-(--color-app-detail)/25 shadow-(--shadow-app-neutral)">
                <div className="h-full aspect-square border-[3px] border-(--color-app-secondary) bg-(--color-app-secondary-light)/25 rounded-(--radius-app-big)">
                    <img src="src/assets/roletaCoelho.png" alt="" className="w-full" />
                </div>

                <div className="flex flex-col">
                    <h2 className="text-heading-4 font-medium">Pé de Coelho</h2>
                    <p className="text-body-3 font-light">Ganhe recompensas diárias</p>

                    <div className="flex flex-col justify-center items-center mt-2">
                        <button
                            type="button"
                            className="w-[170px] h-[30] bg-linear-to-r from-(--color-app-secondary) via-(--color-app-secondary-light) to-(--color-app-secondary) rounded-(--radius-app-default) shadow-(--shadow-app-neutral) text-white text-body-2"
                            onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement | null)?.showModal()}
                        >
                            Girar
                        </button>
                        <p className="text-body-4 text-(--color-app-detail)">3 tentativas restantes</p>
                    </div>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-heading-2 font-bold">Pé de Coelho</h1>
                                <div className="flex justify-center items-center w-11/12 my-[-1rem]">
                                    <img src="src/assets/roletaCoelho.png" alt="" className="w-full" />
                                </div>
                                <p className="text-detail-1 pb-4">Tente sua sorte na roleta Pé de Coelho</p>
                                <button type="button" className="btn">Girar</button>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-[328px] h-[400px] bg-white rounded-(--radius-app-big) border border-(--color-app-detail)/25 shadow-(--shadow-app-neutral) p-4">
                <div className="flex justify-center">
                    <h1 className="text-heading-2 font-medium font-montserrat">Suas Estatísticas</h1>
                </div>

                <hr className="border-[#606060] mb-4" />

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <div className="flex justify-center items-center h-[30px] aspect-square bg-violet-700/25 rounded-full">
                            <img src={moon} alt="icon" className="w-[26px] h-[26px]" />
                        </div>
                        <h3 className="text-body-3 text-(--color-app-detail) font-medium">
                            <span className="text-heading-3 text-black">80 </span>
                            mins
                        </h3>
                    </div>

                    <div className="w-1/2 h-[8px] rounded-(--radius-app-big) bg-[#8353af]/30">
                        <div className="w-1/2 h-[8px] rounded-(--radius-app-big) bg-[#8353af]"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <div className="flex justify-center items-center h-[30px] aspect-square bg-orange-400/50 rounded-full">
                            <img src={fire} alt="icon" className="w-[22px] h-[22px]" />
                        </div>
                        <h3 className="text-body-3 text-(--color-app-detail) font-medium">
                            <span className="text-heading-3 text-black">416 </span>
                            cals
                        </h3>
                    </div>

                    <div className="w-1/2 h-[8px] rounded-(--radius-app-big) bg-[#fd9a00]/30">
                        <div className="w-1/3 h-[8px] rounded-(--radius-app-big) bg-[#fd9a00]"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <div className="flex justify-center items-center h-[30px] aspect-square bg-cyan-700/25 rounded-full">
                            <img src={water} alt="icon" className="w-[22px] h-[22px]" />
                        </div>
                        <h3 className="text-body-3 text-(--color-app-detail) font-medium">
                            <span className="text-heading-3 text-black">2 </span>
                            L
                        </h3>
                    </div>

                    <div className="w-1/2 h-[8px] rounded-(--radius-app-big) bg-[#2b7fff]/30">
                        <div className="w-1/2 h-[8px] rounded-(--radius-app-big) bg-[#2b7fff]"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <div className="flex justify-center items-center h-[30px] aspect-square bg-(--color-app-primary)/25 rounded-full">
                            <img src={foot} alt="icon" className="w-[20px] h-[20px]" />
                        </div>
                        <h3 className="text-body-3 text-(--color-app-detail) font-medium">
                            <span className="text-heading-3 text-black">1600 </span>
                            passos
                        </h3>
                    </div>

                    <div className="w-1/2 h-[8px] rounded-(--radius-app-big) bg-(--color-app-primary)/30">
                        <div className="w-5/6 h-[8px] rounded-(--radius-app-big) bg-(--color-app-primary)"></div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default HomePage;
