import React, { Component } from "react";
import "../Styles/HomeQuote.css";
const cors = require('cors');

class HomeQuote extends Component {

  render() {
    return (
      <>
        <div id="box">
          <p id="head">&nbsp;&nbsp;&nbsp;Did you know?</p>
          <p id='text'>
              Clothing can help you create a positive
              appearance, maintain positive thoughts, and a
              positive self-image. Clothing can be a fast,
              effective tool to increase self-acceptance and
              self-confidence, and to over come feelings of
              anxiety. Clothing is one of the most effective
              tools you can us to improve behavior, increase performance
              and productivity. Clothing is a readily available and
              effective tool enabling you to create a positive impression,
              inviting others to become acquainted witht the unique
              individual inside your well-managed visual image and to 
              regard you favorably and with continued interest...<br/>
          </p>
          <p id='indent'>Judith Rasband</p>
        </div>
      </>
    );
  }
}
export default HomeQuote;
