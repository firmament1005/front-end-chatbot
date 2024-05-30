<<<<<<< HEAD
import React, { useState, useRef } from "react";

interface FooterProps {
    sendQuestions: any
}

const Footer: React.FC<FooterProps> = ({ sendQuestions }) => {

    const [textLineCount, setTextLineCount] = useState(1);
    const [questionText, setQuestionText] = useState('');
    const [questionFiles, setQuestionFiles] = useState<File[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const maxLines = 10;

    const handleTextArea = (e: any) => {
        const lines = e.target.value.split('\n').length;
        setQuestionText(e.target.value);
        if (lines <= maxLines) {
            setTextLineCount(lines);
        }
    }

    const handleSendQuestions = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            if (questionFiles.length > 0) {
                console.log(questionFiles[0].name);
                sendQuestions(textarea.value, questionFiles);
            }
            else {
                sendQuestions(textarea.value, []);
            }
            setQuestionFiles([]);
            setQuestionText('');
            setTextLineCount(1);
        }
    }

    const handleFileIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            setQuestionFiles(Array.from(files));
        }
    }
=======
import React from "react";
>>>>>>> 3a151f4a12e36474493c4e342e9b5341a4f8c100

    return (
        <div className="x-full border-t-2">
            <form>
                <label htmlFor="chat" className="sr-only">Your message</label>
<<<<<<< HEAD
                <div className="flex overflow-y-auto items-center py-2 px-3 bg-gray-50 rounded-lg">
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange} />
                    <svg
                        id="Layer_1_1_"
                        version="1.1"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 cursor-pointer"
                        onClick={handleFileIconClick}>
                        <path
                            d="M7.646,13.646l0.707,0.707l6-6c1.573-1.573,1.573-4.134,0-5.707c-1.574-1.574-4.133-1.574-5.707,0l-6.5,6.5  c-1.298,1.298-1.298,3.409,0,4.707c0.648,0.648,1.501,0.974,2.354,0.974s1.705-0.325,2.354-0.974l6-6  C13.349,7.358,13.621,6.7,13.621,6s-0.272-1.358-0.768-1.854c-0.99-0.99-2.717-0.99-3.707,0l-5.5,5.5l0.707,0.707l5.5-5.5  c0.611-0.611,1.682-0.611,2.293,0C12.452,5.159,12.621,5.566,12.621,6s-0.169,0.841-0.475,1.146l-6,6  c-0.908,0.908-2.385,0.908-3.293,0s-0.908-2.385,0-3.293l6.5-6.5c1.184-1.184,3.109-1.184,4.293,0s1.184,3.109,0,4.293L7.646,13.646  z" />
                    </svg>
                    <textarea
                        rows={textLineCount}
                        ref={textareaRef}
                        value={questionText}
                        onChange={(e) => handleTextArea(e)}
                        className="block mx-4 p-2.5 w-full max-h-100 min-h-11 text-sm text-black bg-white rounded border border-indigo-700 focus:border focus:border-indigo-700 dark:bg-gray-100 dark:border-indigo-700 dark:placeholder-black dark:text-black dark:focus:border-indigo-700 outline-none"
                        placeholder="Your message..." />
                    <button type="button" onClick={handleSendQuestions} className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer">
=======
                <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-white">
                    <textarea rows={1} className="block mx-4 p-2.5 w-full max-h-11 min-h-11 text-sm text-black bg-white rounded border border-indigo-700 focus:border focus:border-indigo-700 dark:bg-gray-100 dark:border-indigo-700 dark:placeholder-black dark:text-black dark:focus:border-indigo-700 outline-none" placeholder="Your message..."></textarea>
                    <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer">
>>>>>>> 3a151f4a12e36474493c4e342e9b5341a4f8c100
                        <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Footer;