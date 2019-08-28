import React, { Component } from "react";
import "../Styles/HomePic.css";
import HomeQuote from "../Components/HomeQuote";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Pic" style={{ opacity: 0.7 }}>
          <div id="picQuote">
            I am thinking about putting a quote here, or a comment
          </div>
        </div>
        <HomeQuote />
        <div id="hBoxQ">
          <div id="hQuestion">
            I think we should put a question here?
            <br />
          </div>
        </div>
        <button type="Submit" id="hBtn">
          Services?
        </button>
      </div>
    );
  }
}
export default Home;
