import React, { Component } from "react";
import "../Styles/Login.css";
import Leads from './Leads';
import {LEADS_API} from '../Config/coms';

class Lead extends Component {

  state = {
    info: '',
  }

  componentDidMount() {
    fetch(`${LEADS_API}/leads`) 
    .then(response => {return response.json()})
    .then(data =>data.map((data) => <Leads lead={data}/>))
    .then(info => {
      this.setState({info: info})
    })
   }

  render() {
    return (
      <div>
        <div id="inBox">
        <div id='leadCom'>{this.state.info}</div>
        </div>
      </div>
    );
  }
}

export default Lead;
