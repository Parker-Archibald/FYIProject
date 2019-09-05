import React, {Component} from 'react';
import Clients from './Clients';

class Client extends Component {

    state = {
        info: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/clients') 
        .then(response => {return response.json()})
        .then(data =>data.map((data) => <Clients client={data}/>))
        .then(info => {
          this.setState({info: info})
        })
       }

    render() {
        return (
            <div>
                <div>{this.state.info}</div>
            </div>
        )
    }
}
export default Client;