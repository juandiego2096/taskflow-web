"use client";

import Link from "next/link";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
const EditCategoryPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos del formulario a través de una función o componente
    console.log("Input Value:", inputValue);
    console.log("Select Value:", selectValue);
  };

  return (
    <>
      <div className="flex items-center justify-end mt-4 ">
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 border bg-bluePrimary  border-bluePrimary rounded-lg  gap-x-2 sm:w-auto hover:bg-opacity-10 hover:text-bluePrimary"
        >
          Crear
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row  gap-5 shadow-lg my-10">
          <div className="my-10 mx-5">
            <label htmlFor="inputField">Nombre</label>
            <input
              className="block w-full py-1.5 pr-5 border border-gray-200 rounded-lg  pl-5 rtl:pr-11  focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              id="inputField"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-10 mx-5">
            <label htmlFor="inputField">Estado</label>
            <select
              className="block w-full py-1.5 pr-5 border border-gray-200 rounded-lg  pl-5 rtl:pr-11   "
              id="selectField"
              value={selectValue}
              onChange={handleSelectChange}
            >
              <option value="opcion1">Habilitado</option>
              <option value="opcion2">Desabilitado</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditCategoryPage;
