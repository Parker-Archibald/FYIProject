import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../Styles/HomeAbout.css";

class HomeAbout extends Component {
  render() {
    return (
      <div>
        <div id="abt">&nbsp;About Michelle</div>
        <div id="about">
          <div id="title">
            <br />
            I'm a Designer in Love with Life
            <p id="description">
              We need to add a short description helping the
              <br />
              customer gain interest so they will go to your about me page. Pic of you =>
              <button id="findOutMore"><Link to='/about' style={{textDecoration: 'none', color: 'black'}}>Find Out More!</Link></button>
            </p>
            <p id="abtPic"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeAbout;
