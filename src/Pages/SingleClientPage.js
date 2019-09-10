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
        <h1 id="singleTitle">{this.state.name}</h1>
        <div id="futurePic">Pic</div>
        <body id='singlePersonInfo'>

          <div id='singleContactInfo'>Contact Info: {this.state.phone} {this.state.email}</div><br/>
          <div id='singleContactInfo'>Initial Comments: {this.state.comments}</div>
          <div id='singleJournal'>Notes:<br/></div>
          <textarea id='singleJournalBox'></textarea>
        </body>
      </div>
    );
  }
}
export default SingleClientPage;
