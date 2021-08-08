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
               <Tab  text = 'Correct' tabColor='Blue'/>
               <Tab  text = 'Show Answer' tabColor='Blue'/>
               <Tab  text = 'Question' tabColor='Blue'/>
            </div>
        );
    }
}
 
export default QuizTools;