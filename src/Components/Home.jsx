import React, { useContext, useRef } from 'react'
import { dataContext } from '../Context/Context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {

    const { state, dispatch } = useContext(dataContext)

    const textRef = useRef(null)

    const copyToClipboard = () => {
        textRef.current.select();
        document.execCommand('copy');
        toast.success('Text Copied successfully!!')
    }

    const showAlert = (e) => {
        if (e.target.value) {
            toast.warn('you cant change anything here')
        }
    }


    return (
        <div className={`w-full max-h-full flex flex-col justify-center items-center gap-10 ${state.isDarkMode ? 'text-white' : 'text-black'}`}>
            <h1 className='text-center text-4xl mt-14'>TextUtils - Word Counter, Charecter Counter, Remove Extra Space</h1>

            <div className='w-full flex flex-col justify-center items-center'>
                <h2 className='w-full ml-28 text-xl font-semibold flex text-start'>Enter Your Text Here:</h2>

                <textarea type='text' ref={textRef} value={state.text} onChange={(e) => dispatch({ type: 'textChange', payload: e.target.value })} className={`w-11/12 h-32 border p-4 focus:outline-none focus:ring focus:ring-blue-300 mt-2 rounded-md border-1 ${state.isDarkMode ? 'text-white bg-gray-600 border-1' : 'text-black bg-white'}`} />

                <div className='w-full gap-4 mt-4 ml-28 text-md flex text-start'>
                    <button onClick={() => dispatch({ type: 'upperCase' })} className='bg-blue-500 py-2 px-3 rounded-md text-white'>Convert to upperCase</button>

                    <button onClick={() => dispatch({ type: 'lowerCase' })} className='bg-blue-500 py-2 px-3 rounded-md text-white'>Convert to lowerCase</button>

                    <button onClick={() => dispatch({ type: 'clearText' })} className='bg-red-500 py-2 px-3 rounded-md text-white'>Clear Text</button>

                    <button onClick={copyToClipboard} className='bg-green-500 py-2 px-3 rounded-md text-white'>Copy to Clipboard</button>

                    <button onClick={() => dispatch({ type: 'removeText' })} className='bg-blue-500 py-2 px-3 rounded-md text-white'>Remove Extra Space</button>
                </div>
            </div>

            <div className='w-full flex flex-col gap-2 mb-6 ml-28 items-start'>
                <h1 className='text-start text-4xl mt-14'>Summery Of Your Text</h1>
                <p>Number of words: {state.wordCount}</p>
                <p>Number of characters: {state.text ? state.text.length : ''}</p>
                <p>Reading Time: {state.readingTime} minutes</p>
            </div>


            <div className='w-full flex flex-col justify-center items-center mb-6'>
                <h2 className='w-full ml-28 text-xl font-semibold flex text-start'>Preview</h2>
                <textarea type='text' value={state.text} onChange={showAlert} className={`w-11/12 h-20 border p-4 mt-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${state.isDarkMode ? 'text-white bg-gray-600 border-0' : 'text-black bg-white'}`} />
            </div>
        </div>
    )
}
