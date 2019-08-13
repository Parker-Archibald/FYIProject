import React, {Component} from 'react';
import Portfolio from '../Components/Portfolio';
import AboutMePort from '../Components/profpic';

class PortfolioPage extends Component {
    render() {
        return (
            <div>
                <Portfolio/>
                <AboutMePort/>
            </div>
        )
    }
}
export default PortfolioPage;