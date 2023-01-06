import React from 'react';
import Search from './Search.jsx'

export default function Titlebar() {
    const logout = (event) => {
        sessionStorage.removeItem('token');
        window.location.reload()
    }; 

    return (
        <nav className="flex justify-around xl:justify-between flex-wrap bg-slate-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <h1 className="text-3xl xl:mb-0 mb-3 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">My</span><span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-600">Flix</span></h1>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                </div>
                <div className="xl:w-96">
                <Search />
                </div>
                <div>
                <button onClick={logout} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
                </div>
            </div>
        </nav>
    )
}