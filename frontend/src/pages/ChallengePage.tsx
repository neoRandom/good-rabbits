import Sidebar  from "../components/Sidebar";
import ChallengeCard from "../components/ChallengeCard";
import Topbar from "../components/Topbar";

const ChallengePage = () => {
    return(
        <div className="bg-stone-100 h-full w-full md:flex flex-row-reverse justify-between">
            <Topbar />

            

            <div className="flex flex-col items-center justify-center mt-8 lg:items-start">

                <div className="flex gap-2">
                    <button className="bg-[#D9D9D9] w-[160px] rounded-t-[10px] text-black font-medium">Suas Metas</button>
                    <button className="bg-linear-to-r from-[#00C950] via-[#10D960] to-[#00C950] w-[160px] rounded-t-[10px] text-white font-medium py-1">Desafios Diários</button>
                </div>

                <div className="flex flex-col items-center w-[328px] h-[619px]  bg-white border border-[#606060] rounded-b-[20px] py-2 lg:w-2xl lg:h-[600px] lg:rounded-tr-[10px]">
                    <p className="text-[15px] text-[#606060] lg:text-heading-4">
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
            
            <Sidebar />
        </div>
    );
};

export default ChallengePage;