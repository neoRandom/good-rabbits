/* O que tem pra fazer? (Aqui e no index.css)
 * - Mudar o input pra combinar com o do Figma
 * - Desgambiarrar o spacer
 * - Padronizar valores (tipo o gap-24px, gap-48px, border-[#606060]/50 e assim por diante)
 * - Criar um componente customizado pro botão de cadastro também, assim como o "Entre"
 * - Sombra customizada pra combinar com o do Figma
 */

const LoginPage = () => {
    return (
        <div className="h-full w-full">
            <div className="flex flex-col justify-center w-full h-full px-8 gap-[24px]">
                <div className="flex flex-col items-center">
                    <h1 className="text-heading-2">Entre na sua Conta</h1>
                    <p className="text-detail-1">Entre novamente na sua toca</p>

                    <div className="h-[48px]"></div>

                    <label className="floating-label w-full mb-[24px]">
                        <span>Email</span>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-lg"
                        />
                    </label>

                    <label className="floating-label w-full">
                        <span>Senha</span>
                        <input
                            type="password"
                            placeholder="Senha"
                            className="input input-lg"
                        />
                    </label>

                    <div className="h-[48px]"></div>

                    <button type="submit" className="app-btn w-full mb-[24px]">Entre</button>
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

                <button type="button" className="btn btn-accent mx-auto">Cadastre-se</button>
            </div>
        </div>
    );
};

export default LoginPage;
