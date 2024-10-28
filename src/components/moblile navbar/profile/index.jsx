import React from 'react'
import icons from '../../../assets/svgs'
const {user}=icons
const Profile = ({image}) => {
  return (
  <div className=' w-2/4 h-2/4 rounded-full bg-white '>
    <img src={image} alt={user} className=' w-full h-full object-contain' />
  </div>
  )
}

export default Profile