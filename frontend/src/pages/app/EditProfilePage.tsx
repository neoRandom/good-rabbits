import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const EditProfilePage = () => {
    const navigate = useNavigate();  
    const [user, setUser] = useState({
        photo: '',
        name: '',
        email: '',
        password: '',
        height: '',
        weight: '',
        birthDate: '',
    });
    const [preview, setPreview] = useState('');
    const [showSavedCard, setShowSavedCard] = useState(false);

                //@ts-ignore
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

                //@ts-ignore
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                //@ts-ignore
                setPreview(reader.result);
                //@ts-ignore
                setUser((prev) => ({ ...prev, photo: reader.result })); // ta dando erro mas ta funcionando, #fé
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setShowSavedCard(true);
        setTimeout(() => {
            setShowSavedCard(false);
            navigate('/app/profile');  // vai para a página do perfil do usuário após 5 segundo
        }, 5000);
    };

    const handleCancel = () => {
        setUser({
            photo: '',
            name: '',
            email: '',
            password: '',
            height: '',
            weight: '',
            birthDate: '',
        });
        setPreview('');
        setShowSavedCard(false);
    };

    return (
        <div className="min-h-screen w-full bg-(--color-app-bg) flex flex-col items-center pt-16 px-4 relative">
         
            {/* Profile Edit Card */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 mt-16">
                <div className="flex flex-col items-center mb-6">
                <p className="text-3xl mb-5 font-semibold text-gray-700">Suas informações</p>
                    <label htmlFor="photo-upload" className="cursor-pointer">
                        <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                            {preview ? (
                                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-gray-500 text-sm">Upload Foto</span>
                            )}
                        </div>
                    </label>
                    <input
                        type="file"
                        id="photo-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />
                </div>

                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={user.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={user.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                        type="number"
                        name="height"
                        placeholder="Altura (cm)"
                        value={user.height}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                        type="number"
                        name="weight"
                        placeholder="Peso (kg)"
                        value={user.weight}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                        type="date"
                        name="birthDate"
                        value={user.birthDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={handleCancel}
                        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                        Salvar
                    </button>
                </div>
            </div>

            {/* Card de Alterações Salvas - Flutuante */}
            {showSavedCard && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-green-300 rounded-xl p-6 max-w-md w-full shadow-lg z-20 transition-all duration-300">
                    <h3 className="text-green-700 text-lg font-bold mb-2 text-center">✅ Alterações Salvas!</h3>
                    <div className="flex items-center gap-4">
                        {user.photo && (
                            <img src={user.photo} alt="User" className="w-16 h-16 rounded-full object-cover" />
                        )}
                        <div className="text-sm text-green-800">
                            <p><strong>Nome:</strong> {user.name || '---'}</p>
                            <p><strong>Email:</strong> {user.email || '---'}</p>
                            <p><strong>Altura:</strong> {user.height || '---'} cm</p>
                            <p><strong>Peso:</strong> {user.weight || '---'} kg</p>
                            <p><strong>Data de Nascimento:</strong> {user.birthDate || '---'}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditProfilePage;
