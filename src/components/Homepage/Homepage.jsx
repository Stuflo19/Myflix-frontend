import React from 'react';
import MovieCards from './MovieCards.jsx'
import Titlebar from './Titlebar.jsx';

function Homepage() {

  return (
    <div className="bcolour">
          <Titlebar />
          <MovieCards />
    </div>
  );
}

export default Homepage;