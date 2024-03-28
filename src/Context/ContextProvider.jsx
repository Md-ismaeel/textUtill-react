import React, { useReducer,useEffect } from 'react'
import { dataContext } from './Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContextProvider = (props) => {

    const reducer = (state, action) => {
        switch (action.type) {

            case 'textChange':
                let wordsPerMinute = 100;
                let words = action.payload.trim().split(/\s+/).filter(word => word !== '');
                let wordCount = words.length;
                let readingTime = Math.ceil(wordCount / wordsPerMinute);

                return {
                    ...state,
                    text: action.payload,
                    wordCount: wordCount,
                    readingTime: readingTime
                };

            case 'upperCase':
                return { text: state.text.toUpperCase() }

            case 'lowerCase':
                return { text: state.text.toLowerCase() }

            case 'clearText':
                return { text: "" }

            case 'copyText':
                copyToClipboard()

            case 'removeText':
                return { text: state.text.trim() }

            case 'isDarkMode':
                toast.success(`Switched to ${state.isDarkMode ? 'light' : 'dark'} mode`);
                return { isDarkMode: !state.isDarkMode }

            default:
                return state;
        }
    }

    const initialState = {
        text: '',
        wordCount: 0,
        readingTime: 0,
        isDarkMode: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const body = document.querySelector('body');
        if (body) {
            body.style.background = (state.isDarkMode)
                ? 'linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)'
                : 'linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)';
        }
    }, [state.isDarkMode]);


    return (
        <dataContext.Provider value={{ state, dispatch }}>
            {props.children}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
        </dataContext.Provider>
    )
}
