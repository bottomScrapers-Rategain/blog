import React, { useState } from 'react';
import Login from '../Components/Login';
import Register from '../Components/Register';
const LoginPage = () => {
    const [login, setLogin] = useState(true);
  return (
    <div className="h-screen w-screen flex justify-center items-start">
    <div className="flex flex-col justify-center w-3/12 items-center py-8">
      <div className="bg-blue-100  w-full p-4 mt-10  flex flex-col gap-4 justify-start items-center">
        <div className="flex flex-row gap-4 w-full">
          <button onClick={()=>setLogin(true)} className={`${ login? "bg-blue-primary text-white" : "border-2 border-neutral-500 text-blue-primary"} w-full font-semibold p-1 rounded`}>Login</button>
          <button onClick={()=>setLogin(false)} className={`${ !login? "bg-blue-primary text-white" : "border-2 border-neutral-500 text-blue-primary"} w-full  font-semibold p-1 rounded`}>Register</button>
         
        </div>
        { login? <Login/> : <Register/>}
      </div>
    </div>
  </div>
  )
}

export default LoginPage
