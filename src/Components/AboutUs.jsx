import React, { useContext, useState } from "react";
import { dataContext } from "../Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AboutUs = () => {
    const { state } = useContext(dataContext);

    const [hiddenIndex, setHiddenIndex] = useState(null);

    const data = [
        {
            title: "Analyse Your Text",
            desc: "TextUtils gives you a way to analyze your text quickly and efficiently. It lets you count words, count characters, or estimate reading time required. It has both light and dark modes for better compatibility.",
        },
        {
            title: "Free to use",
            desc: "TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word/character limits.",
        },
        {
            title: "Browser Compatible",
            desc: "This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc.",
        },
    ];

    const toggleHiddenIndex = (index) => {
        if (hiddenIndex === index) {
            setHiddenIndex(null); // If clicked title is already opened, close it
        } else {
            setHiddenIndex(index);
        }
    };

    return (
        <div
            className={`w-full h-screen flex flex-col justify-center items-center gap-10 ${state.isDarkMode ? "text-white" : "text-black"
                }`}
        >
            <h1 className="text-4xl font-semibold">About App</h1>

            <div className={`w-11/12 p-4 ${state.isDarkMode ? "text-white" : "text-black"
                }`}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-2">
                            <p
                                onClick={() => toggleHiddenIndex(index)}
                                className="text-lg border p-2 cursor-pointer"
                            >
                                {item.title}
                            </p>
                            {hiddenIndex === index && (
                                <p className="text-lg font-semibold px-3">{item.desc}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
