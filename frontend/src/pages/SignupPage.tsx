const SignupPage = () => {
  return (
    <div className="h-full w-full flex border lg:flex-1 "> 
            <div className="flex flex-col justify-center w-full h-full px-8 gap-6 max-w-xl m-auto lg:m-0">
                <div className="flex flex-col items-center">
                    <h1 className="text-heading-2">Crie sua Conta</h1>
                    <p className="text-detail-1">seu próximo salto rumo ao bem-estar</p>

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

                    <button type="submit" className="app-btn w-full mb-6">Cadastre-se</button>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-detail-2 hover:underline"
                    >
                        Já tenho uma conta
                    </a>
                </div>
            </div>
            <div className="hidden lg:flex flex-1 w-full">
                <img src="src/assets/logo3.png" alt="Login" className="w-full min-w-xl max-w-5xl m-auto"/>
            </div>
        </div>
  )
}

export default SignupPage;
