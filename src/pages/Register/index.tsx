import React, { useState, useEffect } from 'react';
import Regbg from "../../assets/images/signupnewbg.png";
import AIimage from "../../assets/images/ailogin.png";
import FileUpload from '../../components/Upload/fileUpload';
import Alert from '../../components/Alert/Alert';

const Register: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisiable, setIsPasswordVisiable] = useState(false);
    const [isConfirmVisiable, setIsConfirmVisiable] = useState(false);
    const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'warning' | 'info'; message: string } | null>(null);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const [ImageURL, setimageURL] = useState<string>("");

    //New Register
    const handleSignUp = () => {
        let flag = false;
        if (userName === "") {
            showAlert('error', '名前を入力してください!');
        } else if (userEmail === "") {
            showAlert('error', 'メールを入力してください!')
        } else if (password === "") {
            showAlert('error', 'パスワードを入力する必要があります!')
        } else if (password.length < 7) {
            showAlert('error', 'パスワードの長さは少なくとも8文字以上にしてください!');
        } else if (password !== confirmPassword) {
            showAlert('error', 'パスワードをチェックしてください!');
        } else {
            showAlert('success', '登録が成功しました。');
            const userData = {
                ID : 1,
                Username: userName,
                Useremail: userEmail,
                Password: password,
                Avatar: ImageURL ? ImageURL : "/img/avatar.png"
            }
            localStorage.setItem('UserData', JSON.stringify(userData));
            flag = true;
        }
        if (flag === false) {
            const id = setTimeout(() => {
                setAlert(null);
            }, 3000);
            setTimeoutId(id);
        } else {
            const id = setTimeout(() => {
                window.location.href = "/dashboard";
                setAlert(null);
            }, 1000);
            setTimeoutId(id);
        }
    }

    //Alert Type
    const showAlert = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
        setAlert({ type, message });
    };

    //Alert Close
    const handleClose = () => {
        setAlert(null);
    };

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    return (
        <>
            <div className="relative flex justify-center items-center lg:min-h-screen w-full h-full px-4 fixed">
                <img src={Regbg} alt="bg" className="absolute -z-20 w-full lg:min-h-screen h-full" />
                <div className="flex justify-center lg:gap-10 gap-5 lg:flex-nowrap flex-wrap w-full lg:pt-20 pt-20">
                    <div className="md:max-w-[470px] w-full">
                        <FileUpload imageURL={ImageURL} setImageURL={setimageURL} />
                        <div className="w-full">
                            <p className="text-white bb text-2xl font-medium leading-[80px]">
                                ユーザー名
                            </p>
                            <input type="text" placeholder="Jhon" className="outline-none w-full border-b-4 border-[#227685] pb-4 px-4 bg-transparent text-white bb"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-white bb text-2xl font-medium leading-[80px]">
                                Eメール
                            </p>
                            <input
                                type="email"
                                placeholder="intraintel@gmail.com"
                                className="outline-none w-full border-b-4 border-[#227685] pb-4 px-4 bg-transparent text-white bb"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full relative">
                            <p className="text-white bb text-2xl font-medium leading-[80px]">
                                パスワード
                            </p>
                            <input
                                type={isPasswordVisiable ? "text" : "password"}
                                placeholder="**********"
                                className="outline-none w-full border-b-4 border-[#227685] pb-4 px-4 bg-transparent text-white bb"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <svg
                                className="absolute right-0 top-20 cursor-pointer"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setIsPasswordVisiable(!isPasswordVisiable)}
                            >
                                <path
                                    d="M2.74602 13.0908C3.07151 13.4162 3.59911 13.4161 3.92449 13.0906C4.24987 12.7651 4.24979 12.2375 3.9243 11.9121L2.01214 10.0006L4.9027 7.11006C6.64748 5.36528 9.12439 4.65437 11.4947 5.1538C11.9451 5.24868 12.387 4.96053 12.4819 4.51019C12.5768 4.05986 12.2886 3.61788 11.8383 3.523C8.9224 2.90865 5.87153 3.78424 3.72419 5.93159L0.244308 9.41146C-0.0811495 9.73692 -0.0811104 10.2646 0.244425 10.59L2.74602 13.0908Z"
                                    fill="white"
                                />
                                <path
                                    d="M19.7562 9.41073L17.2546 6.91C16.9291 6.58462 16.4015 6.5847 16.0761 6.91019C15.7507 7.23569 15.7508 7.76329 16.0763 8.08867L17.9885 10.0002L15.0979 12.8907C13.3531 14.6355 10.8762 15.3464 8.50587 14.847C8.05554 14.7521 7.61356 15.0403 7.51868 15.4906C7.4238 15.9409 7.71195 16.3829 8.16229 16.4778C11.0782 17.0921 14.1291 16.2165 16.2764 14.0692L19.7563 10.5893C20.0818 10.2638 20.0817 9.73611 19.7562 9.41073Z"
                                    fill="white"
                                />
                                <path
                                    d="M5.83386 10.0005C5.83386 10.4607 6.20694 10.8338 6.66715 10.8338C7.12737 10.8338 7.50044 10.4607 7.50044 10.0005C7.50044 8.61994 8.61982 7.50057 10.0004 7.50057C10.4606 7.50057 10.8336 7.12749 10.8336 6.66728C10.8336 6.20706 10.4606 5.83398 10.0004 5.83398C7.69938 5.83395 5.83386 7.69947 5.83386 10.0005Z"
                                    fill="white"
                                />
                                <path
                                    d="M12.5002 10.0003C12.5002 11.3809 11.3808 12.5002 10.0003 12.5002C9.54007 12.5002 9.16699 12.8733 9.16699 13.3335C9.16699 13.7937 9.54007 14.1668 10.0003 14.1668C12.3013 14.1668 14.1668 12.3013 14.1668 10.0003C14.1668 9.54006 13.7937 9.16699 13.3335 9.16699C12.8733 9.16699 12.5002 9.5401 12.5002 10.0003Z"
                                    fill="white"
                                />
                                <path
                                    className={`block`}
                                    d="M19.7552 0.244064C19.4298 -0.0813546 18.9022 -0.0813546 18.5767 0.244064L0.244064 18.5767C-0.0813546 18.9022 -0.0813546 19.4298 0.244064 19.7552C0.569482 20.0806 1.09712 20.0806 1.42254 19.7552L19.7552 1.42254C20.0807 1.09712 20.0807 0.569482 19.7552 0.244064Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="w-full relative">
                            <p className="text-white bb text-2xl font-medium leading-[80px]">
                                パスワードを認証する
                            </p>
                            <input type={isConfirmVisiable ? "text" : "password"} placeholder="**********"
                                className="outline-none w-full border-b-4 border-[#227685] pb-4 px-4 bg-transparent text-white bb"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <svg
                                className="absolute right-0 top-20 cursor-pointer"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setIsConfirmVisiable(!isConfirmVisiable)}
                            >
                                <path
                                    d="M2.74602 13.0908C3.07151 13.4162 3.59911 13.4161 3.92449 13.0906C4.24987 12.7651 4.24979 12.2375 3.9243 11.9121L2.01214 10.0006L4.9027 7.11006C6.64748 5.36528 9.12439 4.65437 11.4947 5.1538C11.9451 5.24868 12.387 4.96053 12.4819 4.51019C12.5768 4.05986 12.2886 3.61788 11.8383 3.523C8.9224 2.90865 5.87153 3.78424 3.72419 5.93159L0.244308 9.41146C-0.0811495 9.73692 -0.0811104 10.2646 0.244425 10.59L2.74602 13.0908Z"
                                    fill="white"
                                />
                                <path
                                    d="M19.7562 9.41073L17.2546 6.91C16.9291 6.58462 16.4015 6.5847 16.0761 6.91019C15.7507 7.23569 15.7508 7.76329 16.0763 8.08867L17.9885 10.0002L15.0979 12.8907C13.3531 14.6355 10.8762 15.3464 8.50587 14.847C8.05554 14.7521 7.61356 15.0403 7.51868 15.4906C7.4238 15.9409 7.71195 16.3829 8.16229 16.4778C11.0782 17.0921 14.1291 16.2165 16.2764 14.0692L19.7563 10.5893C20.0818 10.2638 20.0817 9.73611 19.7562 9.41073Z"
                                    fill="white"
                                />
                                <path
                                    d="M5.83386 10.0005C5.83386 10.4607 6.20694 10.8338 6.66715 10.8338C7.12737 10.8338 7.50044 10.4607 7.50044 10.0005C7.50044 8.61994 8.61982 7.50057 10.0004 7.50057C10.4606 7.50057 10.8336 7.12749 10.8336 6.66728C10.8336 6.20706 10.4606 5.83398 10.0004 5.83398C7.69938 5.83395 5.83386 7.69947 5.83386 10.0005Z"
                                    fill="white"
                                />
                                <path
                                    d="M12.5002 10.0003C12.5002 11.3809 11.3808 12.5002 10.0003 12.5002C9.54007 12.5002 9.16699 12.8733 9.16699 13.3335C9.16699 13.7937 9.54007 14.1668 10.0003 14.1668C12.3013 14.1668 14.1668 12.3013 14.1668 10.0003C14.1668 9.54006 13.7937 9.16699 13.3335 9.16699C12.8733 9.16699 12.5002 9.5401 12.5002 10.0003Z"
                                    fill="white"
                                />
                                <path
                                    className={`block`}
                                    d="M19.7552 0.244064C19.4298 -0.0813546 18.9022 -0.0813546 18.5767 0.244064L0.244064 18.5767C-0.0813546 18.9022 -0.0813546 19.4298 0.244064 19.7552C0.569482 20.0806 1.09712 20.0806 1.42254 19.7552L19.7552 1.42254C20.0807 1.09712 20.0807 0.569482 19.7552 0.244064Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="mt-5 mb-7 flex gap-3 items-center">
                            <div>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <p className="text-white bb text-xl font-medium bb -mt-1">
                                利用規約
                            </p>
                        </div>
                        <button
                            type="button"
                            className="w-full mx-auto h-[63px] flex justify-center border border-[#227685] bb gap-4 items-center text-white lg:text-[32px] text-2xl font-bold bg-transparent hover:bg-[#227685] ease-in-out transform duration-300 rounded-full"
                            onClick={() => handleSignUp()}
                        >
                            サインアップ
                        </button>
                        <button className="w-full mt-3 mx-auto h-[63px] flex justify-center border border-[#227685] bb gap-4 items-center text-white lg:text-[32px] text-2xl font-bold bg-transparent hover:bg-[#227685] ease-in-out transform duration-300 rounded-full">
                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span className="ml-4">
                                Sign Up with Google
                            </span>
                        </button>
                    </div>
                    <div className="md:max-w-[730px] w-full loginbg px-8 py-8">
                        <p className="text-right text-white lg:text-[70px] text-5xl font-bold bb leading-[80px]">
                            サインアップ
                        </p>
                        <img src={AIimage} alt="Image" className="my-5" />
                    </div>
                </div>
                {alert && <Alert type={alert.type} message={alert.message} onClose={handleClose} />}
            </div >
        </>
    )
}

export default Register;