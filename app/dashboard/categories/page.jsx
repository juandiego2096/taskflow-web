import Link from "next/link";
import { MdAdd, MdDownloading } from "react-icons/md";

const CategoriesPage = () => {
  return (
    <>
      <section className="container">
        <div className="flex items-center justify-end mt-4 ">
          <Link href='/dashboard/categories/add_category' className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 border bg-bluePrimary  border-bluePrimary rounded-lg  gap-x-2 sm:w-auto hover:bg-opacity-10 hover:text-bluePrimary">
          <MdAdd />
            Nuevo
          </Link>
        </div>

       
        <div className="py-20 px-10 shadow-lg">
        <div className="relative flex items-center justify-between my-4 md:mt-0">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mx-3 text-gray-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Búsqueda"
            className="block w-full py-1.5 pr-5 text-gray-700 border border-gray-200 rounded-full md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:outline-none focus:ring focus:ring-opacity-40"
          />
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 border text-bluePrimary border-bluePrimary rounded-lg gap-x-2 sm:w-auto hover:bg-bluePrimary hover:text-white">
            <MdDownloading />
            <span>Exportar</span>
          </button>
        </div>

          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700">
              <tr className="rounded-lg" >
                <th scope="col" className="px-6 py-3 bg-blueSecondary">
                <button className="flex items-center gap-x-2">
                                            <span>Nombre</span>

                                            <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                                            </svg>
                                        </button>
                </th>
                <th scope="col" className="px-6 py-3 bg-blueSecondary">
                  Estado
                </th>           
                <th scope="col" className="px-6 py-3 bg-blueSecondary">
                  <span className="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pintura
                </th>
                <td className="px-6 py-4">Habilitado</td>
            
                <td className="px-6 py-4 text-right">
                  <a
                    href="/dashboard/categories/edit_category"
                    className="font-medium text-bluePrimary   hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Fontanería
                </th>
                <td className="px-6 py-4">Habilitado</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-bluePrimary   hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-white  hover:bg-gray-50">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                  Albañilería
                </th>
                <td className="px-6 py-4">Habilitado</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-bluePrimary  hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

		<div className="flex items-center justify-between mt-6">
        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                Anterior
            </span>
        </a>

        <div className="items-center hidden md:flex gap-x-3">
            <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blueSecondary text-bluePrimary border border-bluePrimary ">1</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">2</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">3</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">...</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">12</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">13</a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">14</a>
        </div>

        <a href="#" className="flex items-center px-5 py-2 text-sm text-bluePrimary capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-bluePrimary hover:text-white">
            <span>
                Siguiente
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </a>
    </div>
      </section>
    </>
  );
};

export default CategoriesPage