import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../Styles/NavStyle.css';

class Nav extends Component {

    render() {
        return(
            <nav>
                <Link to='/' id ='navWords' active>Home</Link>
                <Link to='/about' id ='navWords'>About Me</Link>
                <Link to='/services' id ='navWords'>Services</Link>
                <Link to='/portfolio' id ='navWords'>Portfolio</Link>
                <Link to='/contact' id ='navWords'>Contact Me</Link>
            </nav>
        )
    }
}
export default Nav;