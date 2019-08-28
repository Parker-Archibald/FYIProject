import React, { Component } from "react";
import "../Styles/Login.css";
import Leads from './Leads'

class Book extends Component {

  state = {
    info: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/') 
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
        Leads
        <div id='leadCom'>{this.state.info}</div>
        </div>
      </div>
    );
  }
}

export default Book;
