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
    }

    render() {
        return (
            <div>
                <fieldset id='bookField'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='name' name='name' id='bookName' placeholder='Name' onChange={this.handleChange}/>
                        <input type='phone' name='phone' id='bookPhone' placeholder='Phone' onChange={this.handleChange}/>
                        <input type='date' name='date' id='bookDate' placeholder="Date" onChange={this.handleChange}/>
                        <input type='email' name='email' placeholder='Email' onChange={this.handleChange}/>
                        <textarea placeholder='Comments' id='bookComments' name='comments'  length='20' onChange={this.handleChange}/>
                        <button type='submit' id='bookButton'>Book</button>
                    </form>
                </fieldset>
            </div>
        )
    }
}
export default Book;