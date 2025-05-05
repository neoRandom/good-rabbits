/* O que tem pra fazer? (Aqui e no index.css)
 * - Mudar o input pra combinar com o do Figma
 * - Desgambiarrar o spacer
 * - Padronizar valores (tipo o gap-24px, gap-48px, border-[#606060]/50 e assim por diante)
 * - Criar um componente customizado pro botão de cadastro também, assim como o "Entre"
 * - Sombra customizada pra combinar com o do Figma
 */

import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";

const LoginPage = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/app");
    };

    return (
        <div className="h-full w-full flex border lg:flex-1 ">
            <div className="flex flex-col justify-center w-full h-full px-8 gap-7 max-w-xl m-auto lg:m-0">
                <div className="flex flex-col items-center">
                    <h1 className="text-heading-2">Entre na sua Conta</h1>
                    <p className="text-body-2 text-app-detail">
                        Entre novamente na sua toca
                    </p>

                    <div className="flex flex-col w-full my-12">
                        <label className="floating-label w-full mb-6">
                            <span>Email</span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-lg w-full"
                            />
                        </label>
                        <label className="floating-label w-full ">
                            <span>Senha</span>
                            <input
                                type="password"
                                placeholder="Senha"
                                className="input input-lg w-full"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        onClick={() => onSubmit()}
                        className="app-bg-primary w-full mb-6 py-3 rounded-app-default shadow-app-neutral"
                    >
                        Entre
                    </button>
                    <Link
                        to="/login"
                        className="text-body-3 text-app-detail underline"
                    >
                        Esqueci minha Senha
                    </Link>
                </div>

                <div className="flex items-center opacity-50">
                    <hr className="flex-1 border-app-detail/50" />
                    <p className="text-sm mx-[12px]"> OU </p>
                    <hr className="flex-1 border-app-detail/50" />
                </div>

                <Link
                    to="/signup"
                    className="text-center app-bg-secondary w-2/3 mb-6 mx-auto py-2 rounded-app-default shadow-app-neutral"
                >
                    Cadastre-se
                </Link>
            </div>
            <div className="hidden lg:flex flex-1 w-full">
                <img
                    src={logo}
                    alt="Login"
                    className="w-full min-w-xl max-w-5xl m-auto"
                />
            </div>
        </div>
    );
};

export default LoginPage;
