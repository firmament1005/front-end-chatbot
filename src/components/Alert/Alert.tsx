import React from 'react';

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

    return (
        <div className={`${baseStyle} ${alertStyle} fixed absolute top-0`} role="alert">
            <span>{message}</span>
            <button onClick={onClose} className="ml-4 text-lg font-bold">×</button>
        </div>
    );
};

export default Alert;