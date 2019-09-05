import React, {Component} from 'react';
import AboutMePic from '../Components/AboutMePic';
import AboutMeBio from '../Components/AboutMeBio';
import AboutMePort from '../Components/profpic';
import '../Styles/AboutMeBio.css';

class AboutMePage extends Component {
    render() {
        return (
            <div>
                <div id='pic'><AboutMePic/></div>
                <div id='bio'><AboutMeBio/></div>
                <div><AboutMePort/></div>
            </div>
        )
    }
}
export default AboutMePage;