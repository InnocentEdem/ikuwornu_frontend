import Tab from "../../components/UI/atoms/menu_element";
import React, { Component } from 'react';
import './quiz_tools.css'

class QuizTools extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className='quiz-tools' >
              <div onClick={this.props.updateScore()}>Min Pt</div>
              <div onClick={this.props.updateScore()}>Max Pt</div>
              <div>Show Ans</div>
              <div>Next Question</div>
              <div>Timer</div>
            </div>
        );
    }
}
 
export default QuizTools;