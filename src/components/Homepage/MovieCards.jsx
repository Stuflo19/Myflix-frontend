import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx'

export default function MovieCards({genre}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const queryParams = new URLSearchParams(window.location.search);
    const search = queryParams.get('search');
    var data;
    var body;
    
    if(search == null){
      body = JSON.stringify({"genres": genre});
    } else {
      body = JSON.stringify({"genres": genre, "name": {'$regex': search, '$options': 'i'}})
    }
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch('/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: body    
      })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(isLoaded){
      data = JSON.parse(items[0])
      console.log(data)
    }
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else if (data.length === 0){
        return null;
      }else {
    return(
        <div>
            <h1 className="bg-clip-border p-6 bg-slate-700 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-start mt-3">{genre}</h1>
            <div className="grid grid-flow-col auto-cols-max overflow-x-scroll">
                {data.map((item)=>{
                    return <MovieCard data={item} />
                })}
            </div>
        </div>
    )
    }
}