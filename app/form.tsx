import React from 'react'
type InputProps = {
    nombre:string,
    placeholder:string
}

function FormInput ({nombre,placeholder}:InputProps) {
    return(
        <div className='flex flex-col mx-4'>
            <label htmlFor='' className='ml-1'>{nombre}</label>
            <input type="text" placeholder={placeholder} className='bg-[#f8f8f8] focus:bg-blue-100 max-w-xs mb-1 
            pl-1 outline outline-1 rounded-lg'></input>
          </div>
    )    
}
const Formulario = () => {
    return(
    <form>
        <FormInput nombre={'Nombre'} placeholder={'Nombre'}/>
        <FormInput nombre={'Edad'} placeholder={'Edad'}/>
        <FormInput nombre={'Genero'} placeholder={'Genero'}/>
        <FormInput nombre={'Correo'} placeholder={'Correo'}/>
          
          <button type='submit' className=' bg-blue-500 hover:bg-blue-700 text-white ml-56 font-bold py-2 px-8 mt-2 
          rounded-full'>Enviar</button>
        </form>
    )
  }
  export default Formulario