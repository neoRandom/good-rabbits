const ChallengeCard = () => {
    return (
        <div className="w-full max-w-sm lg:max-w-xl mx-auto">
            {/* Barra superior */}
            <div className="bg-[#00C950] w-full h-[6px] rounded-t-[20px]"></div>

            {/* Cartão principal */}
            <div className="flex items-center w-full h-auto border border-[#606060] rounded-b-[20px] bg-[#F4F4F4] px-4 py-2 gap-4">
                {/* Imagem ou ícone */}
                <div className="bg-[#A8A8A8] w-[70px] h-[73px] rounded-[10px] shrink-0"></div>

                {/* Texto */}
                <div className="flex flex-col justify-between flex-1">
                    <h4 className="text-heading-4 font-medium text-sm lg:text-base">Desafio</h4>
                    <p className="text-detail-2 text-xs lg:text-sm">Detalhes do desafio</p>
                </div>

                {/* Pontos */}
                <div className="flex justify-center items-center w-[26px] h-[26px] bg-[#0D542B] rounded-[10px] text-white text-xs font-medium lg:w-[40px] lg:h-[40px]">
                    <span className="block lg:hidden">2</span>
                    <span className="hidden lg:block">2 pts</span>
                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;