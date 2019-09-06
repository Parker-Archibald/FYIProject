import React from "react";
import ReactModal from "react-modal";
import '../Styles/Leads.css'

const customStyles = {
  content: { 
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class LeadModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      name: this.props.lead.name,
      email: this.props.lead.email,
      phone: this.props.lead.phone,
      date: this.props.lead.date,
      comments: this.props.lead.comments
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };


  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#f00";
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal} id='modalText'>View</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel={this.props.name}
        >
            <div>

          <div id='modalName'>{this.state.name}</div>
          <div id='modalEmail'>{this.state.email}</div>
          <div id='modalPhone'>{this.state.phone}</div>
          <div id='modaldate'>{this.state.date}</div>
          <div id='modalcomments'>{this.state.comments}</div>
          

            <button onClick={this.toggleModal}>Close</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default LeadModal;