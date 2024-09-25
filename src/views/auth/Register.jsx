import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Register = () => {

	const [state, setState]=useState({
		name:"",
		email:"",
		password:""
	})
	const inputHandle = (e) =>{
		setState({
			...state,
			[e.target.name] : e.target.value 
		})
	}
	const submit = (e) =>{
		e.preventDefault()
		console.log(state)
	}

    return (
        
		<div>
            <div className='min-w-screen min-h-screen bg-[#c7e6c7aa] flex justify-center items-center'>
	<div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
		<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Register Your Account</h1>
		<form action="#" onSubmit={submit}>
			<div class="mb-4">
				<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
				<input type="text" onChange={inputHandle} value={state.name} name="name" id="name" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your name" required/>
			</div>
			<div class="mb-4">
				<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" name='email' onChange={inputHandle} value={state.email} id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required/>
			</div>
			<div class="mb-4">
				<label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input type="password" name='password' onChange={inputHandle} value={state.password} id="password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
				<a href="#"
					class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
					Password?</a>
			</div>
			<div class="flex items-center justify-between mb-4">
				<div class="flex items-center">
					<input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
					<label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
				</div>
				<a href="#"
					class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
					Account</a>
			</div>
			<button  type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>

            <div className='flex items-center mb-3 gap-3 justify-center'>
            <p>Already Have an account ? <Link className='font-bold' to="/register">Sing In</Link> </p> 
        </div>
            <div className='w-full flex justify-center items-center mb-3'>
            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
            <div className='w-[10%] flex justify-center items-center'>
                <span className='pb-1'>Or</span>
            </div>
            <div className='w-[45%] bg-slate-700 h-[1px] '></div>
        </div>
			  

			  <div className='flex justify-center items-center gap-3'>
            <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
            <span><FaGoogle /></span>
             </div>

             <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
            <span><FaFacebook /></span>
             </div>
			 

        </div>
		</form>
	</div>
</div>
        </div>
        
    );
};

export default Register;