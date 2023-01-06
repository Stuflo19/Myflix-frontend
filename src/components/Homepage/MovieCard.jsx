import React from 'react';

export default function MovieCard({data}) {
    const videoURL = "video?movie=" + data.file
    const posterURL = process.env.REACT_APP_POSTER_URL + data.poster
    return(
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-64 m-2">
            <a href={videoURL}>
                <img className="rounded-lg mx-auto" src={posterURL} alt=""/>
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{data.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.plot}</p>
            </div>
            </a>
        </div>
    )
}