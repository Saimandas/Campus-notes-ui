import React from 'react'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';
const Button = ({label,handleClick,color="transparent",className="",...props}) => {
   
    const onClick=(e)=>{
        handleClick(e.target.value);
    }
    return (
   
   <NavLink to={label} style={({isActive})=>({color:isActive?"red":"white"})} className={` bg-${color}   px-5 py-1 flex justify-center items-center text-nowrap  w-28 h-10 rounded-md text-white font-semibold ${className}`}>
      {label}
   </NavLink>
  
  )
}

export default Button