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

function App() {
  const { token, setToken } = useToken();

  if(!token || token === "error") {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
    </Router>
  );
}

export default App;
