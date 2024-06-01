import React, { useEffect, useState } from 'react';
import FileUpload from '../Upload/fileUpload';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

type USERDATA = {
    Username: string,
    Useremail: string,
    Password: string,
    Avatar: string
}

const UserModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    const [animate, setAnimate] = useState(false);
    const [isNewPasswordVisibled, setIsNewPasswordVisibled] = useState(false);
    const [isConfrimPasswordVisibled, setIsConfrimPasswordVisibled] = useState(false);
    const [isPassword, setIsPassword] = useState("");
    const [isNewPassword, setIsNewPassword] = useState("");
    const [isConfirmPassword, setIsConfirmPassword] = useState("");
    const [Userdata, setUserData] = useState<USERDATA>();
    const [ImageURL, setimageURL] = useState<string>("");

    useEffect(() => {
        const userData = localStorage.getItem("UserData");
        if (userData != null) {
            const temp = JSON.parse(userData);
            setUserData(temp);
        }
    }, [])

    const handleNewPasswordVisibled = () => {
        setIsNewPasswordVisibled(!isNewPasswordVisibled);
        console.log(Userdata);
    }

    const handleonfrimPasswordVisibled = () => {
        setIsConfrimPasswordVisibled(!isConfrimPasswordVisibled);
    }

    useEffect(() => {
        if (isOpen) {
            setAnimate(true);
        } else {
            const timer = setTimeout(() => setAnimate(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <>
            {animate && (
                <div className="py-12 bg-white-700 transition duration-300 ease-in-out absolute top-0 right-0 bottom-0 left-0 bg-opacity-20 bg-black h-full z-50">
                    <div role="alert" className={`container mx-auto w-11/12 md:w-2/3 max-w-lg z-50 ${isOpen ? 'animate-slide-in' : 'animate-slide-out'}`}>
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                            <FileUpload imageURL={ImageURL} setImageURL={setimageURL}/>
                            {/* <div className="flex items-center justify-center bg-grey-lighter">
                                <label className="w-auto flex items-center rounded-full shadow-lg border cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" className="w-24 h-24 rounded-full" alt="" />
                                    <input type='file' className="hidden" />
                                </label>
                            </div> */}
                            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">ユーザー名</label>
                            <input id="name" defaultValue={Userdata?.Username} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                placeholder="James" />
                            <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Eメール</label>
                            <div className="w-full relative">
                                <input
                                    defaultValue={Userdata?.Useremail}
                                    type='text'
                                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                    onChange={(e) => setIsPassword(e.target.value)}
                                />
                            </div>
                            <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">新しいパスワード</label>
                            <div className="w-full relative">
                                <input type={isNewPasswordVisibled ? "text" : "password"} defaultValue={isNewPassword}
                                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                    onChange={(e) => setIsNewPassword(e.target.value)}
                                />
                                <svg
                                    className="absolute right-2 top-2 cursor-pointer"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => handleNewPasswordVisibled()}
                                >
                                    <path
                                        d="M2.74602 13.0908C3.07151 13.4162 3.59911 13.4161 3.92449 13.0906C4.24987 12.7651 4.24979 12.2375 3.9243 11.9121L2.01214 10.0006L4.9027 7.11006C6.64748 5.36528 9.12439 4.65437 11.4947 5.1538C11.9451 5.24868 12.387 4.96053 12.4819 4.51019C12.5768 4.05986 12.2886 3.61788 11.8383 3.523C8.9224 2.90865 5.87153 3.78424 3.72419 5.93159L0.244308 9.41146C-0.0811495 9.73692 -0.0811104 10.2646 0.244425 10.59L2.74602 13.0908Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M19.7562 9.41073L17.2546 6.91C16.9291 6.58462 16.4015 6.5847 16.0761 6.91019C15.7507 7.23569 15.7508 7.76329 16.0763 8.08867L17.9885 10.0002L15.0979 12.8907C13.3531 14.6355 10.8762 15.3464 8.50587 14.847C8.05554 14.7521 7.61356 15.0403 7.51868 15.4906C7.4238 15.9409 7.71195 16.3829 8.16229 16.4778C11.0782 17.0921 14.1291 16.2165 16.2764 14.0692L19.7563 10.5893C20.0818 10.2638 20.0817 9.73611 19.7562 9.41073Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M5.83386 10.0005C5.83386 10.4607 6.20694 10.8338 6.66715 10.8338C7.12737 10.8338 7.50044 10.4607 7.50044 10.0005C7.50044 8.61994 8.61982 7.50057 10.0004 7.50057C10.4606 7.50057 10.8336 7.12749 10.8336 6.66728C10.8336 6.20706 10.4606 5.83398 10.0004 5.83398C7.69938 5.83395 5.83386 7.69947 5.83386 10.0005Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M12.5002 10.0003C12.5002 11.3809 11.3808 12.5002 10.0003 12.5002C9.54007 12.5002 9.16699 12.8733 9.16699 13.3335C9.16699 13.7937 9.54007 14.1668 10.0003 14.1668C12.3013 14.1668 14.1668 12.3013 14.1668 10.0003C14.1668 9.54006 13.7937 9.16699 13.3335 9.16699C12.8733 9.16699 12.5002 9.5401 12.5002 10.0003Z"
                                        fill="black"
                                    />
                                    <path
                                        className={`block`}
                                        d="M19.7552 0.244064C19.4298 -0.0813546 18.9022 -0.0813546 18.5767 0.244064L0.244064 18.5767C-0.0813546 18.9022 -0.0813546 19.4298 0.244064 19.7552C0.569482 20.0806 1.09712 20.0806 1.42254 19.7552L19.7552 1.42254C20.0807 1.09712 20.0807 0.569482 19.7552 0.244064Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">パスワード確認</label>
                            <div className="w-full relative">
                                <input type={isConfrimPasswordVisibled ? "text" : "password"} defaultValue={isConfirmPassword} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                    onChange={(e) => setIsConfirmPassword(e.target.value)}
                                />
                                <svg
                                    className="absolute right-2 top-2 cursor-pointer"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => handleonfrimPasswordVisibled()}
                                >
                                    <path
                                        d="M2.74602 13.0908C3.07151 13.4162 3.59911 13.4161 3.92449 13.0906C4.24987 12.7651 4.24979 12.2375 3.9243 11.9121L2.01214 10.0006L4.9027 7.11006C6.64748 5.36528 9.12439 4.65437 11.4947 5.1538C11.9451 5.24868 12.387 4.96053 12.4819 4.51019C12.5768 4.05986 12.2886 3.61788 11.8383 3.523C8.9224 2.90865 5.87153 3.78424 3.72419 5.93159L0.244308 9.41146C-0.0811495 9.73692 -0.0811104 10.2646 0.244425 10.59L2.74602 13.0908Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M19.7562 9.41073L17.2546 6.91C16.9291 6.58462 16.4015 6.5847 16.0761 6.91019C15.7507 7.23569 15.7508 7.76329 16.0763 8.08867L17.9885 10.0002L15.0979 12.8907C13.3531 14.6355 10.8762 15.3464 8.50587 14.847C8.05554 14.7521 7.61356 15.0403 7.51868 15.4906C7.4238 15.9409 7.71195 16.3829 8.16229 16.4778C11.0782 17.0921 14.1291 16.2165 16.2764 14.0692L19.7563 10.5893C20.0818 10.2638 20.0817 9.73611 19.7562 9.41073Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M5.83386 10.0005C5.83386 10.4607 6.20694 10.8338 6.66715 10.8338C7.12737 10.8338 7.50044 10.4607 7.50044 10.0005C7.50044 8.61994 8.61982 7.50057 10.0004 7.50057C10.4606 7.50057 10.8336 7.12749 10.8336 6.66728C10.8336 6.20706 10.4606 5.83398 10.0004 5.83398C7.69938 5.83395 5.83386 7.69947 5.83386 10.0005Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M12.5002 10.0003C12.5002 11.3809 11.3808 12.5002 10.0003 12.5002C9.54007 12.5002 9.16699 12.8733 9.16699 13.3335C9.16699 13.7937 9.54007 14.1668 10.0003 14.1668C12.3013 14.1668 14.1668 12.3013 14.1668 10.0003C14.1668 9.54006 13.7937 9.16699 13.3335 9.16699C12.8733 9.16699 12.5002 9.5401 12.5002 10.0003Z"
                                        fill="black"
                                    />
                                    <path
                                        className={`block`}
                                        d="M19.7552 0.244064C19.4298 -0.0813546 18.9022 -0.0813546 18.5767 0.244064L0.244064 18.5767C-0.0813546 18.9022 -0.0813546 19.4298 0.244064 19.7552C0.569482 20.0806 1.09712 20.0806 1.42254 19.7552L19.7552 1.42254C20.0807 1.09712 20.0807 0.569482 19.7552 0.244064Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center justify-end w-full">
                                <button className="focus:outline-none focus:ring-gray-400 ml-3 transition duration-150 text-gray-600 ease-in-out border rounded px-8 py-2 text-sm group relative overflow-hidden bg-[#0099FF] cursor-pointer inline-flex items-center rounded text-white justify-center">
                                    <span className="z-40">確 認</span>
                                    <div className="absolute inset-0 h-[100%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
                                </button>
                                <button className="focus:outline-none focus:ring-gray-400 ml-3 transition duration-150 text-gray-600 ease-in-out border rounded px-8 py-2 text-sm group relative overflow-hidden bg-gray-700 cursor-pointer inline-flex items-center rounded text-white justify-center" onClick={onClose}>
                                    <span className="z-40">閉じる</span>
                                    <div className="absolute inset-0 h-[100%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
                                </button>
                            </div>
                            <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                                aria-label="close modal" role="button" onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20"
                                    height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserModal;