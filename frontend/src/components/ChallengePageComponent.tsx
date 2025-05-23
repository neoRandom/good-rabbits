import ChallengeCard from "./ChallengeCard";

type ChallengeProps = {
    setGoalPage: React.Dispatch<React.SetStateAction<boolean>>
};

const ChallengePageComponent = (props: ChallengeProps) => {

    const handleGoalPage = () => {
        props.setGoalPage(true);
    }

    return (
        <div className="w-full md:flex flex-row-reverse justify-between">
            <div className="flex flex-col items-center justify-center lg:items-start w-full">

                {/* Botões visíveis apenas em telas menores que md */}
                <div className="flex gap-2 md:hidden">
                    <button onClick={handleGoalPage} className="bg-[#D9D9D9] w-[160px] rounded-t-[10px] text-black font-medium">Suas Metas</button>
                    <button className="bg-linear-to-r from-[#00C950] via-[#10D960] to-[#00C950] w-[160px] rounded-t-[10px] text-white font-medium py-1">Desafios Diários</button>
                </div>

                {/* Card principal */}
                <div className="
                    flex flex-col items-center 
                    w-full max-w-[328px] md:max-w-lg 
                    h-[619px] md:h-[600px] 
                    bg-white border border-[#606060] 
                    rounded-b-[20px] md:rounded-[10px] 
                    py-2
                ">
                    <p className="text-[15px] text-[#606060] lg:text-heading-4 text-center">
                        Mantenha o ritmo com os desafios diários
                    </p>
                    <hr className="color-[#606060] w-8/9 mb-8" />

                    <div className="flex flex-col gap-4 mb-24">
                        <ChallengeCard />
                        <ChallengeCard />
                        <ChallengeCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengePageComponent;
