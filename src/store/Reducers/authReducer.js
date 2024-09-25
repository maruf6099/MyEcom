// import { createSlice } from "@reduxjs/toolkit";

// export const authReducer =createSlice({
//     name: 'auth',
//     initialState:{
//         successMessage: '',
//         errorMessage: '',
//         loader: false,
//         userInfo: ''
//     },
//     reducers:{

//     },
//     extraReducers:()=>{

//     }
// })
// export default authReducer.reducer

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";


export const admin_login=createAsyncThunk(
    'auth/admin_login',
    async (info) => {
        console.log(info)
        try {
            const {data} = await api.post('/admin-login',info,{withCredentials:true})
            console.log(data)
        } catch (error) {
            console.log(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: ''
    },
    reducers: {
        // এখানে রিডিউসার ফাংশনগুলো যুক্ত করুন
    },
    extraReducers: () => {
        // এখানে এক্সট্রা রিডিউসার ফাংশনগুলো যুক্ত করুন
    }
});
//export default authReducer.reducer

export const authReducer = authSlice.reducer; // রিডিউসার এক্সপোর্ট করুন
//export const { actions } = authSlice; // যদি অ্যাকশনগুলি এক্সপোর্ট করতে চান

// import { createSlice } from "@reduxjs/toolkit";


// export const authReducer = createSlice({
//     name: 'auth',
//     initialState:{
//         successMessage :  '',
//         errorMessage : '',
//         loader: false,
//         userInfo : ''
//     },
//     reducers : {

//     },
//     extraReducers: ()=> {

//     }
// })

// export default authReducer.reducer
