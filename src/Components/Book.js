import React, {Component} from 'react';
import '../Styles/Book.css';
import {LEADS_API} from '../Config/coms';

class Book extends Component {
    constructor(props) {
        super(props);
        this.setState({status: 'potentialClient'})
    }

    state = {
        name: '',
        phone: '',
        date: '',
        email: '',
        comments: '',
        status: 'potentialClient'
    }

    handleChange = ( {target} ) => {
        this.setState({[target.name]: target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${LEADS_API}/leads`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(alert(`Successfully submitted! Thank you! ${this.state.name}`))
        .then(this.refresh());
    }

    refresh() {
        document.location.reload(true);
    }

    render() {
        return (
            <div>
                <fieldset id='bookField'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='name' className="bookAll" name='name' id='bookName' placeholder='Name' onChange={this.handleChange}/>
                        <input type='phone'className="bookAll" name='phone' id='bookPhone' placeholder='Phone' onChange={this.handleChange}/>
                        <input type='date' className="bookAll" name='date' id='bookDate' placeholder="Date" onChange={this.handleChange}/>
                        <input type='email' className="bookAll" name='email' placeholder='Email' onChange={this.handleChange}/>
                        <textarea placeholder='Comments' id='bookComments' name='comments'  length='20' onChange={this.handleChange}/>
                        <button type='submit' id='bookButton'>Book</button>
                    </form>
                </fieldset>
            </div>
        )
    }
}
export default Book;