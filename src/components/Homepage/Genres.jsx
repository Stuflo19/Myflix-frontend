import React, { useState, useEffect } from 'react';
import MovieCards from './MovieCards.jsx'

export default function Genres() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    var data;
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch('/genres', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },     
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
          {data.map((item)=>{
              return <MovieCards genre={item.genre} />
          })}
        </div>
    )
    }
}