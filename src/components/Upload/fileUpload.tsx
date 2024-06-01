import React, { useState } from "react";

interface FileUploadProps {
    imageURL: string;
    setImageURL: React.Dispatch<React.SetStateAction<string>>;
}

const FileUpload: React.FC<FileUploadProps> = ({ imageURL, setImageURL }) => {
    const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const output = URL.createObjectURL(file);
            setImageURL(output);
            return () => {
                URL.revokeObjectURL(output);
            };
        }
    };

    return (
        <div className="flex w-full items-center justify-center bg-grey-lighter">
            <label className="w-40 h-40 flex items-center rounded-full shadow-lg cursor-pointer">
                <div className='w-full h-full rounded-full flex justify-center items-center'>
                    <img src={imageURL ? imageURL : "/img/avatar.png"} className="w-full h-full rounded-full object-cover" alt="Profile" />
                </div>
                <input type='file' onChange={loadFile} className="hidden" />
            </label>
        </div>
    );
};

export default FileUpload;
