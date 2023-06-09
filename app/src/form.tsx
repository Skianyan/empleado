"use client"
import React, { useState } from 'react'
import LinkedList from './linkedList'

const list = new LinkedList();

type InputProps = {
    nombre:string,
    placeholder:string,
    setting:any
    tipo:string
}

function FormInput ({nombre,placeholder,setting,tipo}:InputProps) {
    return(
        <div className='flex flex-col mx-4'>
            <label htmlFor='' className='ml-1'>{nombre}</label>
            <input type={tipo} placeholder={placeholder}
            onChange={(event)=> setting(event.target.value)} 
            className='bg-[#f8f8f8] focus:bg-blue-100 min-w-0 max-w-xs mb-1 pl-1 outline outline-1 rounded-lg'></input>
          </div>
    )    
}


const Formulario = () => {
        const [nombre,setNombre] = useState('');
        const [edad,setEdad] = useState(0);
        const [genero,setGenero] = useState('');
        const [correo, setCorreo] = useState('');
        const [mensaje, setMensaje] = useState('');
        

        const crearEmpleado = (nombre:string,edad:number,genero:string,correo:string) => {
          return{nombre,edad,genero,correo}
          }

        const formHandler = (e:any) => {
          e.preventDefault();

          // let persona:Persona = {
          //   nombre:nombre,
          //   edad:edad,
          //   genero:genero,
          //   correo:correo
          // }
          // console.log(persona)
          
          // list.append(crearEmpleado("rico",23,"m","correo@a"));
          // list.append(crearEmpleado("rico2",24,"f","correo@b"));
          // list.append(crearEmpleado("rico3",23,"m","correo@c"));
          // list.append(crearEmpleado("rico4",24,"f","correo@d"));
          list.append(crearEmpleado(nombre,edad,genero,correo));
          list.printList();

          if (edad >= 1 && mensaje == ""){
            setMensaje(mensaje + nombre + ' ' + edad + ' ' + genero + ' ' + correo);
          }
          else if (edad >= 1){ 
            setMensaje(mensaje +" -> " + nombre + ' ' + edad + ' ' + genero + ' ' + correo);
          }
          else{
            throw new Error("Edad debe ser un numero positivo");
          }
        }
      
    return(
    <div className='grid grid-cols-2'>
    <form onSubmit={formHandler} className='bg-slate-400 pt-2'>
        <FormInput nombre={'Nombre'} placeholder={'Nombre'} setting={setNombre} tipo={'text'}/>
        <FormInput nombre={'Edad'}   placeholder={'Edad'} setting={setEdad} tipo={'number'}/>
        <FormInput nombre={'Genero'} placeholder={'Genero'} setting={setGenero} tipo={'text'}/>
        <FormInput nombre={'Correo'} placeholder={'Correo'} setting={setCorreo} tipo={'email'}/>
          
        <button type='submit' className=' bg-blue-500 hover:bg-blue-700 text-white 
        float-right font-bold py-2 px-8 mr-4 mt-2 mb-4 rounded-full'> Enviar </button>
        <button type='reset' className=' bg-blue-500 hover:bg-blue-700 text-white 
        float-right font-bold py-2 px-8 mr-4 mt-2 mb-4 rounded-full'> Clear </button>
    </form>
    <div className='grid grid-rows-2 content-between bg-slate-500'>
    <div>{mensaje}</div>
    </div>
    
    </div>
    )
  }
  export default Formulario