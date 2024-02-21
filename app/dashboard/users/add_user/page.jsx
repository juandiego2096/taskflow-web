"use client";

import { useState } from "react";

const AddUserPage = () => {
  const [inputName, setInputName] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [selectRol, setSelectRol] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  const handleInputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleInputUsernameChange = (e) => {
    setInputUsername(e.target.value);
  };

  const handleInputEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSelectRol = (e) => {
    setSelectRol(e.target.value);
  };

  const handleSelectCategory = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Name Value:", inputName);
    console.log("Input Username Value:", inputUsername);
    console.log("Input Email Value:", inputEmail);
    console.log("Input Password Value:", inputPassword);
    console.log("Select Rol Value:", selectRol);
    console.log("Select Category Value:", selectCategory);
  };

  return (
    <>
      <div className="flex items-center justify-end mt-4 ">
        
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 border bg-bluePrimary  border-bluePrimary rounded-lg  gap-x-2 sm:w-auto hover:bg-opacity-10 hover:text-bluePrimary"
        >
          Editar
        </button>
      </div>
      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-3 grid-rows-2 place-content-evenly gap-5  my-10 p-10 shadow-lg">
         
          <div className=" mx-5">
            <label htmlFor="inputField">Nombre</label>
            <input
              className="block w-full py-1.5 pr-5 border border-gray-200 rounded-lg  pl-5 rtl:pr-11  focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              id="inputField"
              value={inputName}
              onChange={handleInputNameChange}
            />
          </div>

          <div className="mx-5">
            <label htmlFor="inputField">Username</label>
            <input
              className="block w-full py-1.5 pr-5 border border-gray-200 rounded-lg  pl-5 rtl:pr-11  focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              id="inputField"
              value={inputUsername}
              onChange={handleInputUsernameChange}
            />
          </div>
          
          <div className="mx-5">
            <label htmlFor="inputField">Email</label>
            <input
              className="block w-full py-1.5 pr-5 border border-gray-200 rounded-lg  pl-5 rtl:pr-11  focus:outline-none focus:ring focus:ring-opacity-40"
              type="email"
              id="inputField"
              value={inputEmail}
              onChange={handleInputEmailChange}
            />
          </div>
    
          <div className="mx-5 ">
            <label htmlFor="inputField">Contraseña</label>
            <input
              className="block w-full py-1.5 pr-5 border border-gray-200 rounded-lg  pl-5 rtl:pr-11  focus:outline-none focus:ring focus:ring-opacity-40"
              type="password"
              id="inputField"
              value={inputPassword}
              onChange={handleInputPasswordChange}
            />
          </div>
         
          <div className="mx-5 ">
            <label htmlFor="inputField">Rol</label>
            <select
              className="block w-full py-1.5 pr-5 border border-gray-200 rounded-lg  pl-5 rtl:pr-11   "
              id="selectField"
              value={selectRol}
              onChange={handleSelectRol}
            >
              <option value="opcion1">Operario</option>
              <option value="opcion2">Administrador</option>
            </select>
          </div>
          
          <div className=" mx-5 ">
            <label htmlFor="inputField">Categoria</label>
            <select
              className="block w-full py-1.5 pr-5 border border-gray-200 rounded-lg  pl-5 rtl:pr-11   "
              id="selectField"
              value={selectCategory}
              onChange={handleSelectCategory}
            >
              <option value="opcion1">Pintor</option>
              <option value="opcion2">Albañil</option>
            </select>
          </div>

        </div>

      </form>
    </>
  );
};

export default AddUserPage;
