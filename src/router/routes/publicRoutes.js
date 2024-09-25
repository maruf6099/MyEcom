import { lazy } from 'react';
// import Login from './../../views/auth/Login';
// import Register from './../../views/auth/Register';

const Login =lazy(()=>import('./../../views/auth/Login'))
const Register =lazy(()=>import('./../../views/auth/Register'))
const AdminLogin =lazy(()=>import('../../views/auth/AdminLogin'))



const publicRoutes=[

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/admin/login',
        element: <AdminLogin />
    }
]
export default publicRoutes