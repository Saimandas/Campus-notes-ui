import React from 'react'
import Logo from '../logo'
import Button from '../button'

const Navbar = () => {
  return (
    <div className='w-[90%] h-20 flex mt-10'>
        <div className=' w-[20%] h-20 mt-[-5px] '>
            <Logo/>
        </div>
        <div className=' w-[60%] h-10 ml-14  flex justify-center'>
            <Button label={"Register"}/>
            <Button label={"Upload"}/>
            <Button label={"View"}/>
            <Button label={"Verify"}/>
        </div>
        <div className=' w-[20%] ml-10 h-10 '>
            <Button color='[#2955BB]' label={"login"} className=' active:bg-[#174EA6]' />
        </div>
    </div>
  )
}

export default Navbar