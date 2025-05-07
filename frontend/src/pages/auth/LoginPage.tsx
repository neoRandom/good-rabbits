/* O que tem pra fazer? (Aqui e no index.css)
 * - Mudar o input pra combinar com o do Figma
 * - Desgambiarrar o spacer
 * - Padronizar valores (tipo o gap-24px, gap-48px, border-[#606060]/50 e assim por diante)
 * - Criar um componente customizado pro botão de cadastro também, assim como o "Entre"
 * - Sombra customizada pra combinar com o do Figma
 */

import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import { FormEvent, useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-full w-full flex border lg:flex-1 ">
      <div className="flex flex-col justify-center w-full h-full px-8 gap-7 max-w-xl m-auto lg:m-0">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h1 className="text-heading-2">Entre na sua Conta</h1>
          <p className="text-body-2 text-app-detail">
            Entre novamente na sua toca
          </p>

          <div className="flex flex-col items-center gap-4 w-full my-12">
            <label className="input input-lg validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="exemplo@email.com"
                className="placeholder-app-detail/75"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
              />
            </label>
            <label className="input input-lg validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••"
                minLength={6}
                title="Precisa ter mais de 6 caracteres"
                className="placeholder-app-detail/75"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-base-content/40" />
                ) : (
                  <Eye className="h-5 w-5 text-base-content/40" />
                )}
              </button>
            </label>
          </div>

          <button
            type="submit"
            className="flex justify-center gap-4 items-center app-bg-primary w-[280px] mb-6 py-3 rounded-app-default shadow-app-neutral"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </button>
          <Link to="/login" className="text-body-3 text-app-detail underline">
            Esqueci minha Senha
          </Link>
        </form>

        <div className="flex items-center opacity-50">
          <hr className="flex-1 border-app-detail/50" />
          <p className="text-sm mx-[12px]"> OU </p>
          <hr className="flex-1 border-app-detail/50" />
        </div>

        <Link
          to="/signup"
          className="text-center app-bg-secondary w-[180px] mb-6 mx-auto py-2 rounded-app-default shadow-app-neutral"
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
