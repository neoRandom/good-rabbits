const ChallengeCard = () => {
    return(
        <div>
            <div className="bg-[#00C950] w-[300px] h-[6px] rounded-t-[20px] lg:w-xl"></div>
            <div className="flex items-center w-[300px] h-[100px] border border-[#606060] rounded-b-[20px] bg-[#F4F4F4] px-2 gap-2 lg:w-xl">
                <div className="bg-[#A8A8A8] w-[69.51px] h-[73px] rounded-[10px]"></div>

                <div className="w-1/2 mb-4">
                    <h4 className="text-heading-4">Desafio</h4>
                    <p className="text-detail-2">Detalhes da desafio</p>
                </div>

                <div className="flex justify-center w-[26px] h-[26px] bg-[#0D542B] rounded-[10px] text-white lg:w-1/4 lg:h-1/4">
                    <p className="lg:hidden">2</p>
                    <p className="sr-only lg:not-sr-only">2 Pontos</p>
                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;