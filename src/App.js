import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './Components/Nav';
import Routes from './Config/Routes';

function App() {
  return (
    <div>
      <title>Fashion Your Image</title>
      <Router>
        <Nav/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
