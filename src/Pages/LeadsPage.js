import React, { Component } from "react";
import Lead from "../Components/Lead";
import "../Styles/Leads.css";

class LeadsPage extends Component {
  render() {
    return (
      <body>
        <div id='back'>
        <div id='leadsTitle'>Leads</div>
        <div id='bottomLine'>
        <div id='nameTag'>Name</div>
        <div id='phoneTag'>Phone</div>
        <div id='pck'>Package</div>
        <div id='date'>Date</div>
        </div>
        </div>
        <p><Lead/></p>
      </body>
    );
  }
}

export default LeadsPage;
