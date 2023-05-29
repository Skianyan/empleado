import React from 'react'

const HomePage = () => {
  return (
    <main>
      <header className=' bg-cyan-200 p-4 mt-2'>
        <p className= 'text-center text-2xl uppercase font-bold text-violet-400'>Empleados</p>
      </header>
    <section>
      <form className='flex flex-col mx-2'>
        <label htmlFor='' >Nombre</label>
        <input type="text" placeholder='Nombre' className='bg-[#d8a2d8] text-[#2222]'></input>
      </form>
    </section>
    <footer>Elaborado por Ricardo Haro.</footer>
    </main>
  )
}

export default HomePage