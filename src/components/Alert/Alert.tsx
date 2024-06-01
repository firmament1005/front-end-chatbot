import React, { useState, useEffect } from 'react';

interface AlertProps {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    const baseStyle = 'p-4 mb-4 text-sm rounded-lg flex items-center justify-between';
    let alertStyle = '';

    switch (type) {
        case 'success':
            alertStyle = 'bg-green-100 text-green-700';
            break;
        case 'error':
            alertStyle = 'bg-red-100 text-red-700';
            break;
        case 'warning':
            alertStyle = 'bg-yellow-100 text-yellow-700';
            break;
        case 'info':
            alertStyle = 'bg-blue-100 text-blue-700';
            break;
        default:
            alertStyle = 'bg-gray-100 text-gray-700';
    }

    const AlertArray = {
        messageBox: message,
        messageType: alertStyle
    }

    return (
        <div className='w-full h-auto alsolute top-0 flex flex-col fixed justify-center items-center'>
            <div className={`${baseStyle} ${alertStyle} animate-slide-alert-in`} role="alert">
                <span>{message}</span>
                <button onClick={onClose} className="ml-4 text-lg font-bold">×</button>
            </div>
        </div>
    );
};

export default Alert;