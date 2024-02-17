'use client'

import TextField from '@mui/material/TextField';
import Image from "next/image";


const LoginPage = () => {
  return (
      <div className=" flex flex-col items-center displ justify-center h-screen bg-bluePrimary ">
        <Image
          className=""
          src="/task-flow-logo-white.png"
          alt=""
          width="320"
          height="160"
        />
        <div className='flex space-y-4 flex-col py-10 px-10 bg-white rounded-md'>
        <TextField id="username" label="Usuario" variant="outlined" />
        <TextField id="password" label="Contraseña" variant="outlined" type ="password"  />
        <button onClick={()=>{}}className='bg-bluePrimary text-white py-2 px-4 my-8 rounded'>Iniciar</button>
        </div>
      </div>
  );
};

export default LoginPage;
