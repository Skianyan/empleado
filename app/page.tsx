import React from 'react'
import Formulario from './form'

const HomePage = () => {
  return (
    <main className='bg-[#e8e8e8] rounded-lg mx-4'>
      <header className='flex flex-row bg-[#67baee] p-4 mt-4 rounded-t-lg'>
        <div className="bg-slate-50 p-3 mx-2 rounded-full"></div>
        <div className="bg-slate-50 p-3 mx-2 rounded-full"></div>
        <div className="bg-slate-50 p-3 mx-2 rounded-full"></div>
      </header>
    <section className='pb-5'>
      <p className= 'text-center text-2xl uppercase font-bold text-gray-700 mt-3'>Empleados</p>
    </section>
    <Formulario />
    <footer className='flex float-right italic font-serif'>Elaborado por Ricardo Haro.</footer>
    </main>
  )
}

export default HomePage