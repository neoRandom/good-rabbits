type PrizeCardProps = {
    obtained?: boolean;
    title?: string;
    description?: string;
    icon?: string;
    progressText?: string;
};

const PrizeCard = ({
    obtained = false,
    title = "Conquista",
    description = "Detalhes da conquista",
    icon = "🏆",
    progressText = "0/N",
}: PrizeCardProps) => {
    return (
        <div className="w-full max-w-[700px] mx-auto">
            <div className="flex gap-4 md:gap-6 justify-start items-center px-4 py-4 bg-white w-full rounded-(--radius-app-big) border border-(--color-app-detail)/25 shadow-(--shadow-app-neutral)">
                {/* Ícone no bloco à esquerda */}
                <div className="flex justify-center items-center text-3xl bg-(--color-app-secondary)/25 w-[76px] h-[73px] border border-solid border-(--color-app-primary) rounded-(--radius-app-default)">
                    {icon}
                </div>

                <div className="flex-1">
                    <h3 className="text-heading-4 font-medium">{title}</h3>
                    <p className="text-body-3 text-(--color-app-detail)">{description}</p>
                </div>

                {obtained ? (
                    <div className="flex justify-center items-center bg-(--color-app-primary) w-[80px] h-[20px] rounded-(--radius-app-big) font-(--font-montserrat) text-body-4 font-bold p-2">
                        COMPLETO
                    </div>
                ) : (
                    <div className="flex justify-center items-center">
                        <p className="text-body-2 text-(--color-app-detail) font-medium">{progressText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrizeCard;
