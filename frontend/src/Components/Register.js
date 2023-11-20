import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async ()=>{
        const data = {'email':email,'username':username,'password':password};
        try{
            const response = await axios.post('http://localhost:5000/register', data);
            console.log(response.data); // Log the response data if needed
            // Optionally, you can perform actions based on the response
            if(response){
                alert('Registration Successful')
            }
            // Clear input fields after successful registration
            setUsername('');
            setEmail('');
            setPassword('');
        }
        catch(err){
            alert('Registration failled');
        }
    }

    return (
      <>
        <div className=" w-full flex flex-col gap-2 tracking-wider">
          <label className="text-md text-neutral-700">Username</label>
          <input
            className="w-full h-10 rounded-md px-4 text-base focus:outline-none"
            placeholder="Enter your username"
            type="text"
            name="username"
            onChange={(e)=>{
                setUsername(e.target.value);
            }}
          />
        </div>
        <div className=" w-full flex flex-col gap-2 tracking-wider">
          <label className="text-md text-neutral-700">Email</label>
          <input
            className="w-full h-10 rounded-md px-4 text-base focus:outline-none"
            placeholder="Enter your email id"
            type="email"
            name="email"
                        onChange={(e)=>{
                setEmail(e.target.value);
            }}
          />
        </div>
  
        <div className=" w-full flex flex-col gap-2 tracking-wider">
          <label className="text-md text-neutral-700">Password</label>
          <input
            className="w-full h-10 rounded-md px-4 text-base focus:outline-none"
            placeholder="Enter your password"
            type="password"
            name="Password"
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
          />
        </div>
  
        <button onClick={handleSubmit} className="px-4 py-2 mt-4 text-white rounded-md text-xl font-base text-center w-full bg-blue-primary hover:bg-blue-800 cursor-pointer">
          Register
        </button>
      </>
    );
  };
  
  export default Register;
  
