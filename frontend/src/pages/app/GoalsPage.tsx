import GoalCard from "../../components/GoalCard";

const GoalsPage = () => {
    return (
        <div className="w-full md:flex flex-row-reverse justify-between overflow-x-auto">
            <div className="flex flex-col items-center justify-center lg:items-start">

                <div className="flex gap-2">
                    <button className="bg-linear-to-r from-[#00C950] via-[#10D960] to-[#00C950] w-[160px] rounded-t-[10px] text-white font-medium py-1">Suas Metas</button>
                    <button className="bg-[#D9D9D9] w-[160px] rounded-t-[10px] text-black font-medium">Desafios Diários</button>
                </div>

                <div className="flex flex-col items-center w-[328px] h-[619px]  bg-white border border-[#606060] rounded-b-[20px] py-2 lg:w-2xl lg:h-[600px] lg:rounded-tr-[10px]">
                    <p className="text-[15px] text-[#606060] lg:text-heading-4">
                        Rastreie o seu progresso estabelecendo metas
                    </p>
                    <hr className="color-[#606060] w-8/9 mb-8" />

                    <div className="flex flex-col gap-4 mb-24">
                        <GoalCard />
                        <GoalCard />
                        <GoalCard />
                    </div>

                    <button className="app-btn w-[188px] h-[35px] py-0 text-3xl">+</button>
                </div>
            </div>
        </div>
    );
};

export default GoalsPage;
