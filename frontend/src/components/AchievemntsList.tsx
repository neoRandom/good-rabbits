import PrizeCard from "./PrizeCard";

type Achievement = {
    name: string;
    icon: string;
    description: string;
    active: boolean;
};

const achievements: Achievement[] = [
    { name: "Litros de água", icon: "💧", description: "Você bebeu mais de 3 litros de água no dia!", active: true },
    { name: "Passos dados", icon: "🚶‍♂️", description: "Você caminhou mais de 2km por dia!", active: false },
    { name: "Calorias gastas", icon: "🔥", description: "Você queimou mais de 2500 calorias!", active: true },
    { name: "Alimentação saudável", icon: "🥗", description: "Você comeu super bem por uma semana!", active: false },
    { name: "Dia sem açúcar", icon: "🍏", description: "Você evitou açúcar por um dia inteiro!", active: false },
    { name: "Treino completo", icon: "🏋️‍♂️", description: "Você fez um treino completo e deu seu melhor!", active: true },
    { name: "Horas de foco", icon: "🧠", description: "Você manteve o foco por mais de 3 horas seguidas!", active: false },
    { name: "Tempo offline", icon: "📴", description: "Você passou um dia sem redes sociais!", active: false },
    { name: "Caminhada ao ar livre", icon: "🌳", description: "Você fez uma trilha na natureza!", active: true },
    { name: "Postura correta", icon: "🦾", description: "Você manteve sua postura correta o dia inteiro!", active: false },
    { name: "Sono de qualidade", icon: "🌙", description: "Você dormiu mais de 8 horas de sono profundo!", active: true }
];

type AchievementsListProps = {
    filter?: 'obtained' | 'inProgress' | 'all';
};

const AchievementsList = ({ filter = 'all' }: AchievementsListProps) => {
    const filtered = achievements.filter(a => {
        if (filter === 'obtained') return a.active;
        if (filter === 'inProgress') return !a.active;
        return true;
    });

    return (
        <div className="flex flex-col gap-4">
            {filtered.map((achievement, idx) => (
                <PrizeCard
                    key={idx}
                    title={achievement.name}
                    description={achievement.description}
                    icon={achievement.icon}
                    obtained={achievement.active}
                    progressText="0/1"
                />
            ))}
        </div>
    );
};

export default AchievementsList;
