"use client"
import React, { useState } from 'react'
type InputProps = {
    nombre:string,
    placeholder:string,
    setting:any
}

function FormInput ({nombre,placeholder,setting}:InputProps) {
    return(
        <div className='flex flex-col mx-4'>
            <label htmlFor='' className='ml-1'>{nombre}</label>
            <input type="text" placeholder={placeholder}
            onChange={(event)=> setting(event.target.value)} 
            className='bg-[#f8f8f8] focus:bg-blue-100 min-w-0 max-w-xs mb-1 pl-1 outline outline-1 rounded-lg'></input>
          </div>
    )    
}
const Formulario = () => {
        const [nombre,setNombre] = useState('');
        const [edad,setEdad] = useState('');
        const [genero,setGenero] = useState('');
        const [correo, setCorreo] = useState('');
        const [mensaje, setMensaje] = useState('');
      
        const formHandler = (e:any) => {
          e.preventDefault();
          setMensaje(nombre + ' ' + edad + ' ' + genero + ' ' + correo)
        }
      
      
    return(
    <div className='grid grid-cols-2'>
    <form onSubmit={formHandler} className='bg-slate-400 pt-2'>
        <FormInput nombre={'Nombre'} placeholder={'Nombre'} setting={setNombre}/>
        <FormInput nombre={'Edad'}   placeholder={'Edad'} setting={setEdad}/>
        <FormInput nombre={'Genero'} placeholder={'Genero'} setting={setGenero}/>
        <FormInput nombre={'Correo'} placeholder={'Correo'} setting={setCorreo}/>
          
        <button type='submit' className=' bg-blue-500 hover:bg-blue-700 text-white float-right font-bold py-2 px-8 mr-4 mt-2 mb-4 
        rounded-full'>Enviar</button>
    </form>
    <div className='bg-slate-500'>{mensaje}</div>
    </div>
    )
  }
  export default Formulario