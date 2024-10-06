import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
const Login = ()=> {

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const defaultValues={
    email:"",
    username:"",
    password:""
  }
  const {handleSubmit,register,formState:{errors}}=useForm({defaultValues});
  const onSubmit=(e)=>{
    
  }
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"  placeholder='emai' {...register("email",{required:true,max:20,min:5,})}/>
            <input type="text" {...register("username",{required:true,max:20,min:5})}/>
            <input type="text" {...register("passowrd",{required:true,max:20,min:5})}/>
            <button type='submit'>submit</button>
            {
            console.log(errors)
            }
    </form>
  )
}

export default Login