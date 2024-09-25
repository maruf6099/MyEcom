import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';

const AdminLogin = () => {

	const dispatch = useDispatch()

    const [state, setState]=useState({
		
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
		dispatch(admin_login(state))
		//console.log(state)
	}
    return (
        <div>
            <div className='min-w-screen min-h-screen bg-[#c7e6c7aa] flex justify-center items-center'>
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">

		
        <div className='h-[70px] flex justify-center items-center'>
            <div className='w-[180px] h-[50px]'>
            <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="image" />
            </div>
        </div>

		<form action="#"  onSubmit={submit}>
			<div className="mb-4">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" onChange={inputHandle} value={state.email} id="email" name='email' className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required/>
			</div>
			<div className="mb-4">
				<label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input type="password" onChange={inputHandle} value={state.password} id="password" name='password' className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
				<a href="#"
					className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
					Password?</a>
			</div>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center">
					<input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
					<label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
				</div>
				
			</div>
			<button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>

	 
		</form>
	</div>
</div>
        </div>
    );
};

export default AdminLogin;