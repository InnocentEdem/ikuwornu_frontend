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
               <Tab  text = 'Max Pt' tabColor='Blue'/>
               <Tab  text = 'Min Pt' tabColor='Blue'/>
               <Tab  text = 'Bonus' tabColor='Blue'/>
               <Tab  text = 'Show Ans' tabColor='Blue'/>
               <Tab  text = 'Next Que' tabColor='Blue'/>
            </div>
        );
    }
}
 
export default QuizTools;