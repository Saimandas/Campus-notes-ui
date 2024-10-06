import React from 'react'

const Button = ({label,handleClick,color="transparent",className="",...props}) => {
   
    const onClick=(e)=>{
        handleClick(e.target.value);
    }
    return (
   <button className={` bg-${color}   w-28 h-10 rounded-md text-white font-semibold ${className}` } {...props}>{label}</button>
  )
}

export default Button