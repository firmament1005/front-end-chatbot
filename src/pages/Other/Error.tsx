import React from "react";

const Error: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-white h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-500 dark:text-primary-400">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-gray-500">何かが欠けています。</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-900">申し訳ございませんが、そのページは見つかりません。ホームページには探索できるものがたくさんあります。 </p>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ホームページに戻る</button>
                </div>
            </div>
        </section>
    )
}

export default Error;