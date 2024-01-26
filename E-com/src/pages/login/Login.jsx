import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
  let user={
    username:"",
    password:""
  };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const handleLogin = () => {
  user={
  username:username,
  password:password
 }
 console.log(user);
 
 navigate("/shop");
 
    };
    useEffect(() => {
      // This function will run after every render
        axios.get("http://localhost:8000/user",user);
    }, [user]);
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full">
      <div>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
        <div className="rounded-md shadow-sm">
          <div>
            <input
              aria-label="Username"
              name="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Username"
            />
          </div>
          <div className="-mt-px">
            <input
              aria-label="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleLogin}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 transition duration-150 ease-in-out"
          >
           Sign in
          </button>
        </div>
      </form>
      <div className="mt-6">
        <div className="text-center text-sm leading-5">
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
