import React, { Component } from "react";
import "../Styles/Leads.css";
import LeadModal from '../Components/LeadModal';
import {LEADS_API} from '../Config/coms';

class Leads extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.lead.name,
      phone: this.props.lead.phone,
      email: this.props.lead.email,
      date: this.props.lead.date,
      status: this.props.lead.status,
      comments: this.props.lead.comments,
      id: this.props.lead._id,
      forJournal: '',
      singleJournal: ''
    };
  }

  handleDelete = e => {
    e.preventDefault();
    fetch(`${LEADS_API}/leads/${this.state.id}`, {
      method: "DELETE"
    })
    .then(this.refresh());
  };

  handleAdd = e => {
    // this.setState({status : 'currentClient'});
      const {id, status, ...newState} = this.state;
      newState.status = 'currentClient';
    e.preventDefault();
    fetch(`${LEADS_API}/leads/${this.state.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newState)
    })
    alert(`Client ${newState.name} added as a Current Client!`);
    this.refresh();
  }

  refresh() {
    document.location.reload(true);
  }

  render() {
    return (
      <div>
        <div id="leadBox">
          <div id="realName">{this.state.name}</div>
          <div id="realPhone">{this.state.phone} </div>
          <div id="realPack">{this.state.package_type} </div>
          <div id="realDate">
            {this.state.date}
            <button type="submit" id="leadDelete" onClick={this.handleDelete}>
              Delete
            </button>
            <button id='leadAdd' onClick={this.handleAdd}>Add Client</button>
           <div id='leadModal'> <LeadModal lead={this.state}/> </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Leads;
