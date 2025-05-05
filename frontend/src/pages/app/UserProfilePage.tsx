import { useState } from 'react';

const UserProfilePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [userPlan, setUserPlan] = useState('carrot'); // ou 'golden'

    const achievements = [
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
    

    const handlePlanChange = () => {
        setUserPlan('golden');
        setShowModal(false);
    };

    return (
        <div className=" bg-(--color-app-bg) flex flex-col items-center pt-16 px-4 relative">

            {/* Card de Perfil */}
            <div className="bg-white w-full rounded-xl shadow-md p-6 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-30 h-30 bg-neutral-300 rounded-full" />
                    <div>
                        <h2 className="text-2xl font-semibold text-black">Usuário</h2>
                        <p className="text-lg text-gray-600 flex items-center gap-1">
                            Plano:&nbsp;
                            {userPlan === 'carrot' ? (
                                <>
                                    Carrot <span>🥕</span>
                                </>
                            ) : (
                                <>
                                    Golden Carrot <span>✨🥕</span>
                                </>
                            )}
                        </p>
                    </div>
                </div>
                <p className="text-orange-500 text-xl font-bold">🔥 365</p>
            </div>
          

            {/* Conquistas */}
            <div className="w-full mt-6">
                <h2 className="text-lg font-semibold mb-2">Conquistas</h2>
                <div className="">
                    <div className="flex flex-wrap gap-5 px-1">
                        {achievements.map((achievement, i) => (
                            <div
                                key={i}
                                className={`relative group flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-3xl border-2 ${
                                    achievement.active
                                        ? 'opacity-100 border-green-500'
                                        : 'opacity-40 border-gray-300'
                                } bg-gray-100 transition duration-300 cursor-pointer`}
                            >
                                <span>{achievement.icon}</span>
                                {/* Tooltip animado */}
                                <div className="absolute bottom-full left-25 transform -translate-x-1/2 mb-3 w-44 bg-black text-white text-xs rounded-md p-2 z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-200 shadow-lg">
                                    <strong>{achievement.name}</strong>
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            

            {/* Info de email/senha */}
            <div className="bg-white w-full rounded-xl shadow-md p-6 mt-6 text-base text-black space-y-2">
                <p>Email: <span className="text-gray-600">user.email@gmail.com</span></p>
                <p>Senha: <span className="text-gray-600">user.password</span></p>
            </div>

            {/* Botões */}
            <div className="flex gap-4 mt-6 w-full">
                <a
                    href="/app/editprofile"
                    className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full"
                >
                    Editar Informações
                </a>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full"
                >
                    Mudar de Plano
                </button>
            </div>

            {/* Modal de assinatura */}
            {showModal && (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-4">Assinar Golden Carrot ✨🥕</h2>
            <p className="mb-4">Por apenas <strong>R$ 9,99/mês</strong> você desbloqueia conquistas exclusivas e vantagens!</p>
            <div className="flex justify-center gap-4">
                <button
                    onClick={handlePlanChange}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
                >
                    Assinar
                </button>
                <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-full"
                >
                    Cancelar
                </button>
            </div>
        </div>
    </div>
)}
        </div>
    );
};

export default UserProfilePage;
