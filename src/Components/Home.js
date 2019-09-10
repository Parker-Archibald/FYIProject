import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../Styles/HomePic.css";
import HomeQuote from "../Components/HomeQuote";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Pic" style={{ opacity: 1 }}>
          <div id="picQuote1">
            Look your best.<br/>
          </div>
          <div id='picQuote2'>
          Feel your best.<br/>
          </div>
          <div id='picQuote3'>
          Be your best.<br/>
          </div>
        </div>
        <HomeQuote />
        <div id="hBoxQ">
          <div id="hQuestion">
           How can I help you feel more put together?
           {/* make one line */}
            <br />
          </div>
        </div>
        <button type="Submit" id="hBtn">
          <Link to='/survey' style={{textDecoration: 'none', color: 'black'}}>Survey?</Link>
        </button>
      </div>
    );
  }
}
export default Home;
