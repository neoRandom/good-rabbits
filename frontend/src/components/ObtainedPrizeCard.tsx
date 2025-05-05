const ObtainedPrizeCard = () => {
    return (
        <div className="flex gap-4 justify-start items-center px-4 bg-white w-[328px] h-[100px] rounded-(--radius-app-big) border border-(--color-app-detail)/25 shadow-(--shadow-app-neutral)">
            <div className="bg-(--color-app-detail)/50 w-[76px] h-[73px] rounded-(--radius-app-default)"></div>

            <div>
                <h3 className="text-heading-4 font-medium">Conquista</h3>
                <p className="text-body-3 text-(--color-app-detail)">Detalhes da conquista</p>
            </div>

            <div className="flex justify-center items-center bg-(--color-app-primary) w-[80px] h-[20px] rounded-(--radius-app-big) font-(--font-montserrat) text-body-4 font-bold p-2">
                COMPLETO
            </div>
        </div>
    );
};

export default ObtainedPrizeCard;