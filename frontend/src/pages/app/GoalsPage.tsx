import { useState } from "react";
import GoalsPageComponent from "../../components/GoalsPageComponent";
import ChallengePageComponent from "../../components/ChallengePageComponent";

const GoalsPage = () => {
    const [goalPage, setGoalPage] = useState(true);

    return (
        <div className="flex flex-col md:flex-row w-full h-full gap-4">
            {/* Goals Component */}
            <div
                className={`
                    w-full md:w-1/2
                    ${goalPage ? "block" : "hidden"}
                    md:block
                `}
            >
                <GoalsPageComponent setGoalPage={setGoalPage} />
            </div>

            {/* Challenge Component */}
            <div
                className={`
                    w-full md:w-1/2
                    ${!goalPage ? "block" : "hidden"}
                    md:block
                `}
            >
                <ChallengePageComponent setGoalPage={setGoalPage} />
            </div>
        </div>
    );
};

export default GoalsPage;
