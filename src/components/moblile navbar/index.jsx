import { easeOut, motion } from 'framer-motion'
import React from 'react'
import ButtonsForNav from './buttons'
import icons from '../../assets/svgs' 
import Profile from './profile';
const {home,navUser,navUpload,view,admin,log}=icons;
const MobileNav = ({isMenuClicked}) => {

  return (
    <motion.div className='bg-[#080A0B] z-10 min-h-80 py-3 px-8 h-[80%] mt-7 sm:hidden  absolute right-[-50%] w-[50%] mr-3  '  animate ={{ right:isMenuClicked?0:'-100%'}} transition={{ease:easeOut,duration:0.5}}> 
    <div className=' w-full h-1/5  flex justify-center items-center'>
        <Profile image={"https://scholarships.gov.in/public/assets2425/images/icons/user-icon-white.svg"}/>
    </div>
    
    <div className=' w-full h-2/4'>
    <ButtonsForNav label={"Home"} icon={home}/>
    <ButtonsForNav label={"View"} icon={view}/>
    <ButtonsForNav label={"Upload"} icon={navUpload}/>
    <ButtonsForNav label={"About Us"} icon={navUser}/>
    <ButtonsForNav label={"Admin"} icon={admin}/>
    </div>
    <div className=' h-1/4 w-full flex justify-end flex-col '>
    <ButtonsForNav label={"Logout"} icon={log}/>
    <ButtonsForNav label={"View"} icon={view}/>
    </div>
   
  </motion.div>
  )
}

export default MobileNav