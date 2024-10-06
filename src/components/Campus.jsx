import React from 'react';
import image from '../assets/67162.webp';
import Navbar from './navbar';
import Button from './button';
import Card from './card';
import icons from '../assets/svgs';
import { useGetData } from '../hooks/apiCall';
import Login from './login';
const Campus = () => {
  const {folder,user,upload}=icons;
   const [notesCount,notesError,notesIsLoading]=useGetData("https://campusnotes-backend-1.onrender.com/api/v1/users/count-notes");
   const[usersCount,usersError,usersIsLoading]=useGetData("https://campusnotes-backend-1.onrender.com/api/v1/users/count-users");
   console.log(usersCount,usersError);
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="bg-cover bg-center px-5 flex  items-center relative w-screen h-screen flex-col font-popin" >
      <Navbar/>
      <p className=' absolute bottom-96 text-gray-500  font-semibold left-40'>Secure all notes and photos to acces them anytime</p>
      <div className=' absolute bottom-80 left-40 flex gap-7 '>
        <Button  label={"Get Started"}  className=" active:bg-[#174EA6] bg-[#2955BB]"  /> 
        <Button label={"Contact Me"} color='[#121212]'/>
      </div>
      <div className=' w-full h-64  bg-white bottom-4 absolute px-14 py-3 gap-10 flex  justify-center '>
      <Card label={"Users"} icon={user} data={usersCount} />
      <Card label={"Notes"} icon={folder} data={notesCount}/>
      <Card label={"Notes Uploaded"} icon={upload} data={notesCount}/>
      <Card label={"Contact author"} icon={upload} data={9954261623}/>
      </div>
    </div>
  );
};

export default Campus;
