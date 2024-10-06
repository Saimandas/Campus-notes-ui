import React from 'react'
import { NumberAnimation } from '../../Animations'

const Card = ({label,data,icon}) => {
  return (
    <div className=' h-full rounded-lg w-[20%] bg-black flex gap-3 overflow-hidden '>
         <div className=' w-[70%] h-full relative px-8 text-white '>
         <p className=' absolute bottom-24 text-2xl font-semibold' >{label}</p>
         <h1 className=' absolute bottom-14  text-4xl font-extrabold'>
         <NumberAnimation value={Number(data)}/>
         </h1>
         </div>
         <div className='w-[30%] h-full  relative px-8 '>
         <div className=' absolute bottom-12'> 
        {icon}
         </div>
         </div>
    </div>
  )
}

export default Card