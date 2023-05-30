import React from 'react'

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

      <form className='flex flex-col mx-4'>
        <label htmlFor='' className='ml-1'>Nombre</label>
        <input type="text" placeholder='Nombre' className='bg-[#f8f8f8] hover:bg-blue-100 max-w-xs mb-1 
        pl-1 outline outline-1 rounded-lg'></input>
      </form>

      <form className='flex flex-col mx-4'>
        <label htmlFor='' className='ml-1'>Edad</label>
        <input type="text" placeholder='Edad' className='bg-[#f8f8f8] hover:bg-blue-100 max-w-xs mb-1
        pl-1 outline outline-1 rounded-lg'></input>
      </form>

      <form className='flex flex-col mx-4'>
        <label htmlFor='' className='ml-1'>Genero</label>
        <input type="text" placeholder='Genero' className='bg-[#f8f8f8] hover:bg-blue-100 max-w-xs mb-1
        pl-1 outline outline-1 rounded-lg'></input>
      </form>

      <form className='flex flex-col mx-4'>
        <label htmlFor='' className='ml-1'>Correo</label>
        <input type="text" placeholder='Correo' className='bg-[#f8f8f8] hover:bg-blue-100 max-w-xs mb-1
        pl-1 outline outline-1 rounded-lg'></input>
      </form>

      <button className=' bg-blue-500 hover:bg-blue-700 text-white ml-56 font-bold py-2 px-8 mt-2 
       rounded-full'>Enviar</button>
    </section>
    <footer className='flex float-right italic font-serif'>Elaborado por Ricardo Haro.</footer>
    </main>
  )
}

export default HomePage