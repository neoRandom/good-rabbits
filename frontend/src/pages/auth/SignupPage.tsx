import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import toast from "react-hot-toast";

const SignupPage = () => {
    // const [showPassword, setShowPassword] = useState(false);  // TODO: mostrar a senha ou não
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { signup, isSigningUp } = useAuthStore();

    const validateForm = () => {
        if (!formData.username.trim())
            return toast.error("Nome de usuário é obrigatório");

        if (!formData.email.trim()) return toast.error("Email é obrigatório");

        if (!/\S+@\S+\.\S+/.test(formData.email))
            return toast.error("Formato de email inválido");

        if (!formData.password) return toast.error("Password é obrigatório");

        if (formData.password.length < 6)
            return toast.error("A senha deve conter pelo menos 6 letras");

        return true;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const success = validateForm();

        if (success === true) signup(formData);
    };

    return (
        <div className="h-full w-full flex border lg:flex-1 ">
            <div className="flex flex-col justify-center w-full h-full px-8 gap-6 max-w-xl m-auto lg:m-0">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-heading-2">Crie sua Conta</h1>
                    <p className="text-body-2 text-app-detail">
                        seu próximo salto rumo ao bem-estar
                    </p>

                    <div className="flex flex-col w-full my-12">
                        <label className="floating-label w-full mb-6">
                            <span>Nome de Usuário</span>
                            <input
                                type="text"
                                placeholder="Nome de Usuário"
                                className="input input-lg w-full"
                                value={formData.username}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        username: e.target.value,
                                    });
                                }}
                            />
                        </label>
                        <label className="floating-label w-full mb-6">
                            <span>Email</span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-lg w-full"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    });
                                }}
                            />
                        </label>
                        <label className="floating-label w-full ">
                            <span>Senha</span>
                            <input
                                type="password"
                                placeholder="Senha"
                                className="input input-lg w-full"
                                value={formData.password}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    });
                                }}
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="app-bg-primary w-full mb-6 py-3 rounded-app-default shadow-app-neutral"
                        disabled={isSigningUp}
                    >
                        Cadastre-se
                    </button>
                    <Link
                        to="/login"
                        className="text-body-3 text-app-detail underline"
                    >
                        Já tenho uma conta
                    </Link>
                </form>
            </div>
            <div className="hidden lg:flex flex-1 w-full">
                <img
                    src="src/assets/logo3.png"
                    alt="Login"
                    className="w-full min-w-xl max-w-5xl m-auto"
                />
            </div>
        </div>
    );
};

export default SignupPage;
