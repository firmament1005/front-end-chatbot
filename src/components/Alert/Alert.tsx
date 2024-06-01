import React, { useState, useEffect } from 'react';

interface AlertProps {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    const baseStyle = 'relative block w-auto rounded px-4 py-4 text-sm text-white animate-slide-alert-in';
    let alertStyle = '';
    let svgStyle = '';
    let title = '';

    switch (type) {
        case 'success':
            alertStyle = 'bg-green-500';
            svgStyle = 'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z';
            title = '成功';
            break;
        case 'error':
            alertStyle = 'bg-red-500';
            svgStyle = 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z';
            title = 'オユ';
            break;
        case 'warning':
            alertStyle = 'bg-yellow-500';
            svgStyle = 'M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z';
            title = '警告';
            break;
        case 'info':
            alertStyle = 'bg-blue-500';
            svgStyle = 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z';
            title = '情報';
            break;
        default:
            alertStyle = 'bg-gray-500';
            svgStyle = 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z';
            title = '既定';
    }

    return (
        <div className='w-full h-auto alsolute top-0 flex flex-col fixed justify-center items-center'>
            <div className={`${baseStyle} ${alertStyle}`} data-dismissible="alert">
                <div className="absolute top-4 left-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mt-px h-6 w-6">
                        <path fillRule="evenodd" d={svgStyle} clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="ml-8 mr-12">
                    <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                        {title}
                    </h5>
                    <p className="mt-2 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                        {message}
                    </p>
                </div>
                <div data-dismissible-target="alert" onClick={onClose} data-ripple-dark="true" className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white     hover:bg-opacity-20">
                    <div role="button" className="w-max rounded-lg p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;