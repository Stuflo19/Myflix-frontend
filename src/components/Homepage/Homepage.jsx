import React from 'react';
import Genres from './Genres.jsx'
import Titlebar from './Titlebar.jsx';

function Homepage() {

  return (
    <div className="bcolour">
          <Titlebar />
          <Genres />
    </div>
  );
}

export default Homepage;