const HomePage = () => {
    return (
        <main className="flex flex-col gap-[20px]">
            <div>
                <div className="flex flex-col gap-2 w-full bg-white rounded-small app-shadow-neutral p-2">
                    <div className="flex gap-2 w-full">
                        <button
                            type="button"
                            className="primary-colors rounded-big app-shadow-neutral px-2.5 py-1"
                        >
                            Pontos
                        </button>
                        <button
                            type="button"
                            className="rounded-big app-shadow-neutral px-2.5 py-1"
                        >
                            Metas
                        </button>
                        <div className="flex-1"></div>
                        <button className="block h-[32px] aspect-square rounded-full bg-green-600"></button>
                    </div>
                    <hr className="border-[#606060]/25" />
                    <div className="w-full h-[160px] bg-neutral-300"></div>
                </div>
                <div className="flex gap-[16px] mt-2">
                    <button
                        type="button"
                        className="flex-1 bg-white rounded-small app-shadow-neutral py-1"
                    >
                        Minhas Metas
                    </button>
                    <button
                        type="button"
                        className="flex-1 bg-white rounded-small app-shadow-neutral py-1"
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
                    <div className="flex flex-col justify-between">
                        <button
                            type="button"
                            className="primary-colors rounded-small app-shadow-neutral px-2.5 py-1"
                        >
                            Prêmios
                        </button>
                        <p className="text-detail-2 select-none">
                            5 não resgatados
                        </p>
                    </div>
                </div>
            </div>
            <hr className="border-[#606060]/25" />
            <div className="flex gap-2 h-[120px] bg-white rounded-small p-3 app-shadow-neutral">
                <div className="h-full aspect-square border-[3px] border-red-500 bg-neutral-300 rounded-big"></div>
                <div className="flex flex-col">
                    <h2>Pé de Coelho</h2>
                    <p>Ganhe recompensas diárias</p>
                    <button type="button">Girar</button>
                    <p>3 tentativas restantes</p>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
