import React, { Component } from "react";
import '../Styles/Client.css';

class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.client.name,
      phone: this.props.client.phone,
      email: this.props.client.email,
      date: this.props.client.date,
      status: this.props.client.status,
      comments: this.props.client.comments,
      id: this.props.client._id
    };
  }

  render() {
    return (
        <div>
            <div id='clientRealName'>{this.state.name}</div>
        </div>
    )
  }
}
export default Clients;
