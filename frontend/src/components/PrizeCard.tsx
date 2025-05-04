const PrizeCard = () => {
    return (
        <div>
            <div className="flex gap-6 justify-start items-center px-4 bg-white w-[328px] h-[100px] rounded-(--radius-app-big) border border-(--color-app-detail)/25 shadow-(--shadow-app-neutral)">
                <div className="bg-(--color-app-detail)/50 w-[76px] h-[73px] rounded-(--radius-app-default)"></div>

                <div>
                    <h3 className="text-heading-4 font-medium">Conquista</h3>
                    <p className="text-body-3 text-(--color-app-detail)">Detalhes da conquista</p>
                </div>

                <div className="flex justify-center items-center">
                    <p className="text-body-2 text-(--color-app-detail) font-medium">0/N</p>
                </div>
            </div>
        </div>
    );
};

export default PrizeCard;