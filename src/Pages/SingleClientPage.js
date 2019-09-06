import React, { Component } from "react";
import "../Styles/SingleClient.css";

class SingleClientPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: this.props.location.state.state.name,
    phone: this.props.location.state.state.phone,
    email: this.props.location.state.state.email,
    date: this.props.location.state.state.date,
    status: this.props.location.state.state.status,
    comments: this.props.location.state.state.comments,
    id: this.props.location.state.state.id
  };

  render() {
    return (
      <div>
        <h1 id="singleTitle">SingleClientPage</h1>
        <div id="futurePic">Pic</div>
        <body id='singlePersonInfo'>
          <div id="singleName">{this.state.name}</div>
          <div id="singlePhone">{this.state.phone}</div>
          <div id="singleEmail">{this.state.email}</div>
          <div id="singleInitialComments">{this.state.comments}</div>
        </body>
      </div>
    );
  }
}
export default SingleClientPage;
