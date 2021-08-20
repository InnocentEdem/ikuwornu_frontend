
import React, { Component } from 'react';
import './quiz_tools.css'

class QuizTools extends Component {
    constructor(props) {
        super(props);
        let data=JSON.parse(localStorage.getItem('newQuiz'));
        this.state = { 
            min:data.min_question_point,
            max:data.max_question_point
         }
         this.handleClick=this.handleClick.bind(this)
        
    }
   componentDidMount(){
       localStorage.setItem('scores',JSON.stringify(this.props.scores))
      
   }
   handleClick(e){
    
        this.props.handleUpdate(e.target.id)
        
   }
  
    render() { 
        return (  
            <div className='quiz-tools' >
              <div id='minpt' onClick={this.handleClick} >Min Pt</div>
              <div id='maxpt' onClick={this.handleClick} >Max Pt</div>
              <div id='show' onClick={this.handleClick} >Show Ans</div>
              <div id='next' onClick={this.handleClick} >Next Question</div>
              <div id='timer'onClick={this.handleClick} >Timer</div>
            </div>
        );
    }
}
 
export default QuizTools;