import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Routes from './Config/Routes';

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
