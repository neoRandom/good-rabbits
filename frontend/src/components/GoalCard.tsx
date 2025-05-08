const GoalCard = () => {
    return (
        <div className="w-full max-w-sd lg:max-w-xl mx-auto">
            {/* Barra superior */}
            <div className="bg-[#00C950] w-full h-[6px] rounded-t-(--radius-app-big)"></div>

            {/* Cartão principal */}
            <div className="flex items-center w-full h-auto border border-(--color-app-detail)] rounded-b-(--radius-app-big) bg-[#F4F4F4] px-4 py-2 gap-4">
                {/* Imagem ou ícone */}
                <div className="bg-(--color-app-detail)/40 w-[70px] h-[73px] rounded-[10px] shrink-0"></div>

                {/* Texto */}
                <div className="flex flex-col justify-between flex-1">
                    <h4 className="text-heading-4 font-medium text-sm lg:text-base">Meta</h4>
                    <p className="text-detail-2 lg:text-detail-1">Detalhes do meta</p>
                </div>

            </div>
        </div>
    )
};

export default GoalCard;