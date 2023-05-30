"use client"
import React from 'react'
import { useState } from "react"

const HomePage = () => {
  const [nombre,setNombre] = useState('');
  const [edad,setEdad] = useState('');
  const [genero,setGenero] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  function display(){
      setMensaje(nombre + ' ' + edad + ' ' + genero + ' ' + correo)
  }

  const formHandler = (e:any) => {
    e.preventDefault();
    console.log('boton presionado')
  }


  return (
    <main className='bg-[#e8e8e8] rounded-lg mx-4'>
      <header className='flex flex-row bg-[#67baee] p-4 mt-4 rounded-t-lg'>
        <div className="bg-slate-50 p-3 mx-2 rounded-full"></div>
        <div className="bg-slate-50 p-3 mx-2 rounded-full"></div>
        <div className="bg-slate-50 p-3 mx-2 rounded-full"></div>
      </header>
    <section className='pb-5'>

      <p className= 'text-center text-2xl uppercase font-bold text-gray-700 mt-3'>Empleados</p>

      <form className='flex flex-col mx-4'
      onSubmit={formHandler}>
        <label htmlFor='' className='ml-1'>Nombre</label>
        <input type="text" placeholder='Nombre' value={nombre} onChange={(event)=> setNombre(event.target.value)} 
        className='bg-[#f8f8f8] hover:bg-blue-100 max-w-xs mb-1 pl-1 outline outline-1 rounded-lg'></input>
      </form>

      <form className='flex flex-col mx-4' onSubmit={formHandler}>
        <label htmlFor='' className='ml-1'>Edad</label>
        <input type="text" placeholder='Edad' value={edad} onChange={(event)=> setEdad(event.target.value)}
        className='bg-[#f8f8f8] hover:bg-blue-100 max-w-xs mb-1 pl-1 outline outline-1 rounded-lg'></input>
      </form>

      <form className='flex flex-col mx-4' onSubmit={formHandler}>
        <label htmlFor='' className='ml-1'>Genero</label>
        <input type="text" placeholder='Genero' value={genero} onChange={(event)=> setGenero(event.target.value)}
        className='bg-[#f8f8f8] hover:bg-blue-100 max-w-xs mb-1 pl-1 outline outline-1 rounded-lg'></input>
      </form>

      <form className='flex flex-col mx-4' onSubmit={formHandler}>
        <label htmlFor='' className='ml-1'>Correo</label>
        <input type="text" placeholder='Correo' value={correo} onChange={(event)=> setCorreo(event.target.value)}
        className='bg-[#f8f8f8] hover:bg-blue-100 max-w-xs mb-1 pl-1 outline outline-1 rounded-lg'></input>
      </form>

      <button onClick={display} className=' bg-blue-500 hover:bg-blue-700 text-white ml-56 font-bold py-2 px-8 mt-2 
       rounded-full'>Enviar</button>

      <div>{mensaje}</div>
    </section>
    <footer className='flex float-right italic font-serif'>Elaborado por Ricardo Haro.</footer>
    </main>
  )
}

export default HomePage