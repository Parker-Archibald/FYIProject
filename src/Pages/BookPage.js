import React, {Component} from 'react';
import Book from '../Components/Book';
import '../Styles/Book.css';

class BookPage extends Component {
    render() {
        return (
            <div>
                <div id='bookBack'/>
                <div id='compTop'><Book/></div>
            </div>
        )
    }
}
export default BookPage;