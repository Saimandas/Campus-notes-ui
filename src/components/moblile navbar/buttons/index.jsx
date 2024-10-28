import React from 'react'

const ButtonsForNav = ({label,icon,onClick}) => {
  return (
    <button onClick={onClick} className=' flex justify-start gap-5 mt-2  w-full items-center text-white font-bold text-xl text-nowrap '>{icon}{label}</button>
  )
}

export default ButtonsForNav