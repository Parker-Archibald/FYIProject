import React, {Component} from 'react';
import '../Styles/Survey.css';

class Survey extends Component {
    render() {
        return(
            <div id='sBox'>
                <h1 id='surveyTitle'>Fashion Your Image (&Logo)</h1>
                <form>
                    <div id='surveyCat'>Name</div><br/>
                    <input type='name' id='surveyForm'/><br/>
                    <div id='surveyCat'>Email Address</div><br/>
                    <input type='email' id='surveyForm'/><br/>
                    <div id='surveyCat'>Phone Number</div><br/>
                    <input type='phone' id='surveyForm'/><br/>
                    <div id='surveyCat'>Describe your current challenge in 2 to 3 sentences</div><br/>
                    <textarea type='text' id='surveyForm'/><br/>
                    <div id='surveyCat'>On a scale of 1 to 10, how motivated are you to solve these challenges?</div><br/>
                    <input type='number' id='surveyForm'/><br/>
                    <div id='surveyCat'>Why have you decided to focus on your image at this particular time?</div><br/>
                    <textarea type='text' id='surveyForm'/><br/>
                    <div id='surveyCat'>Tell me about the last time you invested in your image? How was the experience?</div><br/>
                    <textarea type='text' id='surveyForm'/><br/>
                    <div id='surveyCat'>Are you in a position to invest in professional services to help you elevate your image and personal style?</div><br/>
                    <input type='text' id='surveyForm'/><br/>
                    <div id='surveyCat'>Do you need to consult a spouse or partner before investing in your image?</div><br/>
                    <input type='text' id='surveyForm'/><br/>
                    <div id='surveyCat'>How did you find out about me?</div><br/>
                    <textarea type='text' id='surveyForm'/><br/>
                    <div id='surveyCat'>Tell me why you're interested in working with me?</div><br/>
                    <textarea type='text' id='surveyForm'/><br/>
                    <div id='surveyCat'>Is there anything else we should know or do you have any questions for us?</div><br/>
                    <textarea type='text' id='surveyForm'/><br/>
                    <div  id='surveySubmitDiv'><button type='submit' id='surveySubmit'>Submit</button></div>
                </form>
            </div>
        )
    }
}
export default Survey;