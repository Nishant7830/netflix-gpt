import React from 'react'
import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm,setIsSignForm] = useState(true);
  const toggleSignInForm = ()=>{
      setIsSignForm(!isSignInForm);
  }
  return (
  
    <div>
      <Header/>
      <div className= "absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
      alt="Logo"/>
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80"> 
       <h1 className="font-bold text-3xl text-white p-4 m-4">{isSignInForm ? "Sign In" :"Sign up"}</h1>
       {!isSignInForm && (<input type="text" placeholder="full name"
         className="p-2 my-2 w-full"/>

       )}
       

        <input type="text" placeholder="Email Address" 
        className="p-2 my-2 w-full"/>

        <input type="text" placeholder="Password"
         className="p-2 my-2 w-full"/>

        <button className="p-4 my-6 w-full text-white bg-red-700 rounded-lg">{isSignInForm ? "Sign In" :"Sign up"}
        </button>
        <p className="py-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" :"already registered? Sign in Now.."}</p>
      </form>
     </div>
     
  )
}

export default Login;
