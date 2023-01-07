// Importing
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Importing pages
import Homepage from './components/Homepage/Homepage.jsx';
import Login from './components/Login/Login.jsx';
import useToken from './components/App/useToken.js';
import VideoPlayer from './components/Video_page/video.jsx';
import CreateAccount from './components/Login/CreateAccount.jsx';

function App() {
  const { token, setToken } = useToken();

  if(token === "createAccount"){
    return <CreateAccount setToken={setToken} />
  }
  else if(!token || token === "error" || token === "accountCreated") {
    return <Login setToken={setToken} token={token} />
  }

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
    </Router>
  );
}

export default App;
