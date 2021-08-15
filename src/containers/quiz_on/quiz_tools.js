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
              <div>Min Pt</div>
              <div>Max Pt</div>
              <div>Show Ans</div>
              <div>Timer</div>
            </div>
        );
    }
}
 
export default QuizTools;