import React, { Component } from "react";
import "../Styles/SingleClient.css";
import {LEADS_API} from '../Config/coms';

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
    id: this.props.location.state.state.id,
    singleJournal: this.props.location.state.state.singleJournal,
    forJournal: ''
  };

  handleClick = (e) => {
    e.preventDefault();
    const {name, phone, email, date, status, comments, id, ...newBody} = this.state;
    fetch(`${LEADS_API}/single/${this.state.name}/${this.state.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBody)
    })
    .then(this.refresh());
  }

  handleChange = ({target}) => {
    this.setState({forJournal : target.value})
  }

  componentDidMount = () => {
    fetch(`${LEADS_API}/single/${this.state.name}/${this.state.id}`)
    .then(response => {return response.json()})
    .then(data => data.map((data) => {  
        let j = data.singleJournal + data.forJournal;
        this.setState({singleJournal: j})
  }))
  }

  refresh = () => {
    document.location.reload(true);
  }

  render() {
    return (
      <div>
        <h1 id="singleTitle">{this.state.name}</h1>
        <div id="futurePic">Pic</div>
        <body id='singlePersonInfo'>
        <div>{this.state.singleJournal}</div>
          <div id='singleContactInfo'>Contact Info: {this.state.phone} {this.state.email}</div><br/>
          <div id='singleContactInfo'>Initial Comments: {this.state.comments}</div>
          <div id='singleJournal'>Notes:<br/></div>
          <textarea id='singleJournalBox' onChange={this.handleChange}></textarea><br/>
          <button type='Submit' onClick={this.handleClick}>Save</button>
          
        </body>
      </div>
    );
  }
}
export default SingleClientPage;
