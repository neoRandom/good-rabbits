/* O que tem pra fazer? (Aqui e no index.css)
 * - Mudar o input pra combinar com o do Figma
 * - Desgambiarrar o spacer
 * - Padronizar valores (tipo o gap-24px, gap-48px, border-[#606060]/50 e assim por diante)
 * - Criar um componente customizado pro botão de cadastro também, assim como o "Entre"
 * - Sombra customizada pra combinar com o do Figma
 */

const LoginPage = () => {
    return (
        <div className="h-full w-full flex border lg:flex-1 "> 
            <div className="flex flex-col justify-center w-full h-full px-8 gap-6 max-w-xl m-auto lg:m-0">
                <div className="flex flex-col items-center">
                    <h1 className="text-heading-2">Entre na sua Conta</h1>
                    <p className="text-detail-1">Entre novamente na sua toca</p>

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

                    <button type="submit" className="app-btn w-full mb-6">Entre</button>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-detail-2 hover:underline"
                    >
                        Esqueci minha Senha
                    </a>
                </div>

                <div className="flex items-center opacity-50">
                    <hr className="flex-1 border-[#606060]/50" />
                    <p className="text-sm mx-[12px]"> OU </p>
                    <hr className="flex-1 border-[#606060]/50" />
                </div>

                <button type="button" className="app-btn-cadastro w-1/2 btn-accent mx-auto">Cadastre-se</button>
            </div>
            <div className="hidden lg:flex flex-1 w-full">
                <img src="src/assets/logo3.png" alt="Login" className="w-full min-w-xl max-w-5xl m-auto"/>
            </div>
        </div>
    );
};

export default LoginPage;
