import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx'

export default function MovieCards() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    var data;
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:5000/", {
        method: 'GET',  
        withCredentials: true,  
        crossorigin: true,      
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
    }, [])

    if(isLoaded){
      data = JSON.parse(items[0])
      console.log(items)
    }
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
    return(
        <div>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-start mt-10">First 20 movies</h1>
            <div className="grid grid-flow-col auto-cols-max overflow-x-scroll">
                {data.map((item)=>{
                    return <MovieCard data={item} />
                })}
            </div>
        </div>
    )
    }
}