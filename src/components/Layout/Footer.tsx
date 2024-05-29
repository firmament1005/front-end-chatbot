import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="x-full border-t-2">
            <form>
                <label htmlFor="chat" className="sr-only">Your message</label>
                <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-white">
                    <textarea rows={1} className="block mx-4 p-2.5 w-full max-h-11 min-h-11 text-sm text-black bg-white rounded border border-indigo-700 focus:border focus:border-indigo-700 dark:bg-gray-100 dark:border-indigo-700 dark:placeholder-black dark:text-black dark:focus:border-indigo-700 outline-none" placeholder="Your message..."></textarea>
                    <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer">
                        <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Footer;