import roleta from "../../assets/roletaCoelho.png";
import ModalDica from "../../components/ModalDica";
import ModalRoleta from "../../components/ModalRoleta";
import FirstDiv from "../../components/FirstDiv";
import Statistics from "../../components/Statistics";


const HomePage = () => {
    return (
        <main className="flex flex-col gap-[20px]">
            <div className="w-full max-w-5xl mx-auto p-4 flex flex-col gap-6">
                <FirstDiv />

                {/* Botões */}
                <div className="flex flex-wrap gap-2 mt-2">
                    <button
                        type="button"
                        className="flex-1 min-w-[140px] h-[32px] bg-white rounded-(--radius-app-default) shadow-(--shadow-app-neutral) font-medium text-body-2"
                    >
                        Minhas Metas
                    </button>
                    <button
                        type="button"
                        className="flex-1 min-w-[140px] h-[32px] bg-white rounded-(--radius-app-default) shadow-(--shadow-app-neutral) font-medium text-body-2"
                        onClick={() => (document.getElementById('my_modal_4') as HTMLDialogElement)?.showModal()}
                    >
                        Dica
                    </button>
                </div>

                <hr className="border-(--color-app-detail)/25" />

                {/* Pontuação */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-[16px] aspect-square bg-green-500 rounded-full" />
                        <h2 className="text-heading-4">Pontuação</h2>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <p className="text-[48px] md:text-[64px] font-medium leading-[52px]">1.000</p>

                        <div className="flex flex-col justify-center items-start md:items-center mt-2 md:mt-0">
                            <button
                                type="button"
                                className="w-full md:w-[160px] h-[32px] bg-gradient-to-r from-(--color-app-primary) via-(--color-app-primary-light) to-(--color-app-primary) rounded-(--radius-app-default) shadow-(--shadow-app-neutral) text-white font-medium text-body-2"
                            >
                                Prêmios
                            </button>
                            <p className="text-body-2 text-(--color-app-detail) font-medium">5 não resgatados</p>
                        </div>
                    </div>
                </div>

                <hr className="border-(--color-app-detail)/25" />

                {/* Pé de Coelho */}
                <div className="flex flex-row gap-3 max-x-2/5 md:max-x-681 bg-white rounded-(--radius-app-default) p-3 border border-(--color-app-detail)/25 shadow-(--shadow-app-neutral)">
                    <div className="w-[120px] md:w-1/5 md:position-absolute aspect-square border-[3px] border-(--color-app-secondary) bg-(--color-app-secondary-light)/25 rounded-(--radius-app-big) flex-shrink-0">
                        <img src={roleta} alt="Roleta" className="w-full h-full object-contain" />
                    </div>

                    <div className="flex flex-col justify-between w-full">
                        <div className="md:mb-8">
                            <h2 className="text-heading-4 font-medium md:text-heading-1">Pé de Coelho</h2>
                            <p className="text-body-3 font-light md:text-heading-3">Ganhe recompensas diárias</p>
                        </div>

                        <div className="flex flex-col items-center justify-between gap-2 mt-2">
                            <button
                                type="button"
                                className="w-[130px] md:w-2/5 h-[30px] bg-gradient-to-r from-(--color-app-secondary) via-(--color-app-secondary-light) to-(--color-app-secondary) rounded-(--radius-app-default) shadow-(--shadow-app-neutral) text-white text-body-2"
                                onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement | null)?.showModal()}
                            >
                                Girar
                            </button>
                            <p className="text-body-4 text-(--color-app-detail) text-center md:text-body-1">3 tentativas restantes</p>
                        </div>

                        <ModalRoleta />
                        <ModalDica />
                    </div>
                </div>

                {/* Estatísticas */}
                <Statistics />

            </div>

        </main>
    );
};

export default HomePage;
