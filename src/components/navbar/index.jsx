import React, { useState } from 'react'
import Logo from '../logo'
import Button from '../button'
import { useMediaQuery } from 'react-responsive'
import icons from '../../assets/svgs'
import { easeOut, motion } from 'framer-motion'
import ButtonsForNav from '../moblile navbar/buttons'
import MobileNav from '../moblile navbar'
const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' }); 
  const {menu}=icons;
  const [isMenuClicked, setisMenuClicked] = useState(false);
  console.log(isMenuClicked);
  return (
    <div className='w-[90%] h-20 flex mt-10'>
        <div className=' w-[20%] h-20 mt-[-5px] '>
            <Logo/>
        </div>
        {
           isMobile?<div className=' absolute right-8'><button className='' onClick={()=>setisMenuClicked((prev)=>!prev)}>{menu}</button></div>:<div className=' w-[60%] h-10 ml-14  sm:flex justify-center hidden '>
           <Button label={"Register"}/>
           <Button label={"Upload"}/>
           <Button label={"View"}/>
           <Button label={"Verify"}/>
       </div>
        }
       <MobileNav isMenuClicked={isMenuClicked}/>
        <div className=' w-[20%] ml-10 h-10 hidden sm:block '>
            <Button color='[#2955BB]' label={"login"} className=' active:bg-[#174EA6]' />
        </div>
    </div>
  )
}

export default Navbar