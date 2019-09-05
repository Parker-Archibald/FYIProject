import React, { Component } from 'react';
import '../Styles/HomeBook.css';

class HomeBook extends Component {
    render () {
        return(
            <div>
                <div id='qBook'>
                    <div id='qForBook'>
                        "A question or comment to help the customer<br/> want to book an appt." &nbsp;&nbsp;-Parker
                    </div>
                    <div id='btn'><button id='bookBtn'>Book!</button></div>
                </div>
            </div>
        )
    }
}

export default HomeBook;