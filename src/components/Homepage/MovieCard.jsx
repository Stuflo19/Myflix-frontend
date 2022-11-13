import React from 'react';

export default function MovieCard({data}) {
    return(
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-64 m-2">
            <a href="www.stuflo.dev">
                <img className="rounded-lg mx-auto" src={data.poster} alt=""/>
            </a>
            <div className="p-5">
                <a href="www.stuflo.dev">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{data.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.plot}</p>
                <a href="www.stufo.dev" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View
                </a>
            </div>
        </div>
    )
}