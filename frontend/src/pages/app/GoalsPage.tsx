import { useState } from "react";
import GoalsPageComponent from "../../components/GoalsPageComponent";
import ChallengePageComponent from "../../components/ChallengePageComponent";

const GoalsPage = () => {
    const [goalPage , setGoalPage] = useState(true);

    if(goalPage){
        return <GoalsPageComponent setGoalPage={setGoalPage}/>
    }
        return <ChallengePageComponent setGoalPage={setGoalPage}/>
};

export default GoalsPage;
