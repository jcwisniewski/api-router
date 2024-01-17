"use client";
import Header from "@/components/ui/header";

const Login = () => {
  return (
    <>
      <div className="h-screen bg-gray-900 p-5">
        <h1 className="text-3xl font-bold text-center">Sistema de login</h1>
        <div className="my-6">
          <label htmlFor="emailField" className="block mb-2 text-lg">
            Endereço de e-mail
          </label>
          <input
            type="email"
            id="emailField"
            className=" mb-2 rounded-md w-full p-2 bg-gray-800 text-lg border border-gray-600 outline-yellow-500"
          />
        </div>
        <div className="my-6">
          <label htmlFor="passwordField" className="block mb-2 text-lg">
            Senha
          </label>
          <input
            type="password"
            id="passwordField"
            className="rounded-md w-full p-2 bg-gray-800 text-lg border border-gray-600 outline-yellow-500"
          />
        </div>
        <div className="my-6">
          <button className="rounded-md w-full p-2 bg-yellow-500 border-none  text-lg">
            Entrar
          </button>
        </div>

        <div className="text-center text-gray-400">
          Ainda não é membro?{" "}
          <a className="text-yellow-500 font-bold" href="">
            Faça agora seu cadastro!
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
