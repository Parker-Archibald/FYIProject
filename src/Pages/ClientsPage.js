import React, { Component } from "react";
import Client from "../Components/Client";
import '../Styles/Client.css';

class ClientsPage extends Component {
  render() {
    return (
      <div>
        <div id="clientBox">
          <div id="clientTitle">Current Clients</div>
          <div id="clientName">Name</div>
          <div id="clientPhone">Phone</div>
        </div>
        <Client />
      </div>
    );
  }
}
export default ClientsPage;
