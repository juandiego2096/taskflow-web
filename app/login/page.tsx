"use client";

import React, { useState, FormEvent } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../../contexts/authContext';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login, isLoggedIn } = useAuthContext();

  if (isLoggedIn) {
    return router.push("/dashboard");
  }

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <form
      className="bg-bluePrimary flex min-h-screen flex-col p-6"
      onSubmit={handleForm}
    >
      <div className="h-64 w-full flex items-center justify-center">
        <Image
          className=""
          src="/task-flow-logo-white.png"
          alt=""
          width="310"
          height="147"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col h-[595px] w-[579px] rounded-lg bg-white">
          <div className="pl-12 pt-16">
            <label className="text-4xl text-bluePrimary">¡Hola!</label>
            <br></br>
            <label className="text-lg">Inicia sesión para continuar</label>
          </div>
          <div className="mx-12 mt-10">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Usuario
            </label>
            <input
              className="w-full border-b-2 border-l-[0px] border-r-[0px] border-t-[0px] px-3 py-2 leading-tight text-gray-700 focus:border-sky-700 focus:ring-0"
              id="username"
              type="text"
              placeholder="Ingresa tu usuario"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            ></input>
          </div>
          <div className="mx-12 my-10">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Contraseña
            </label>
            <input
              className="w-full border-b-2 border-l-[0px] border-r-[0px] border-t-[0px] px-3 py-2 leading-tight text-gray-700 focus:border-sky-700 focus:ring-0"
              id="username"
              type="text"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <div className="flex items-center mb-4 justify-end pr-12">
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Mantener sesión iniciada
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-2.5"
            ></input>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {handleForm}}
              className="w-60 bg-bluePrimary text-white py-2 px-4 my-8 rounded-lg"
            >
              Iniciar
            </button>
          </div>
          <div className="flex justify-center justify-self-end mt-5">
            <a href="#" className="text-xs hover:underline text-bluePrimary">
              Ver politicas de privacidad
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
