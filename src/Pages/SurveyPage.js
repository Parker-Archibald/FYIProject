import React, {Component} from 'react';
import '../Styles/Survey.css';
import Survey from '../Components/Survey';

class SurveyPage extends Component {
    render() {
        return(
            <div id='surveyBack'>
                <div id='surveyBox'>
                    <Survey/>
                </div>
            </div>
        )
    }
}
export default SurveyPage;