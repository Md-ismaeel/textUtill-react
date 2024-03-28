import React, { useContext } from 'react'
import { dataContext } from '../Context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

    const { state } = useContext(dataContext)
    return (

        <div className={`w-full h-screen flex flex-col justify-center items-center gap-10 ${state.isDarkMode ? 'text-white' : 'text-black'}`}>

            <div className='flex flex-col justify-center items-center text-lg'>
                <h1 className='text-4xl text-center mb-6'>Contact me</h1>
                <p>Created by : Md Ismail</p>
                <p>Email Address : mdismaeelkhan345@gmail.com</p>
                <p className='mt-4'>Github link : <a href="https://github.com/Md-ismaeel" target='_blank' className='bg-slate-500 py-1 px-3 text-white rounded-md'>Preview</a></p>
            </div>

        </div>
    )
}
