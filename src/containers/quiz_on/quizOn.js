import Navbar from '../../components/navbar/navbar';
import React, { Component } from 'react';
import './quizOn.css'
import Contestant from '../../components/contestant/contestant';
import Timer from '../../components/timer/timer';
import QuizTools from './quiz_tools';
import qonQuestions from '../qonQuestions';
class  QuizOn extends Component {
    constructor(props) {
        super(props);    
         const quizData=localStorage.getItem('tempQuiz');
         localStorage.setItem('newQuiz',quizData);
         const newQuiz = JSON.parse(localStorage.getItem('newQuiz'));
         let initialScores = newQuiz.contestants.map(e=>[e,0]);
          const min = newQuiz.min_question_point;
          const maxim =  newQuiz.max_question_point;
          const num =  newQuiz.number_of_questions;
          const time = newQuiz.time_per_question;
          this.state = {
            scores:initialScores,
            max:initialScores.length,
            newQuiz,
            current:0 ,
            timer:false,
            min,
            maxim,
            num,
            time,
            questionTracker:[], 
            onTimer:false,
            newQuestion:true        
         }      
         this.handleUpdate=this.handleUpdate.bind(this)
     }
    handleUpdate(e){
        let target=e.target;
        this.setState({
           target
        })
       if(e==="minpt"){
            let prev=[...this.scores];
            prev[this.current] +=this.min;
       }else if(e==="maxpt"){
            let prev=[...this.scores];
            prev[this.current] +=this.maxim;
       }else if(e==="timer"){
           this.setState({onTimer:false})
           this.setState({onTimer:true})
           
       }else if(e==="next"){
           this.questionHandler()
            this.setState({newQuestion:false})
            this.setState({newQuestion:true})
           
       }else if(e==="show"){
            
       }
   }
   questionHandler(){
       let random ;
       while(!this.state.questionTracker.includes(random)){
        random= Math.floor(Math.random() * (this.state.num * this.state.contestants.length)) + 1;
       }
       this.setState({
           questionTracker:[...this.state.questionTracker,random]
       })
      
   }
    handleScores(score){
        if (this.state.current<this.state.max-1){
            this.setState({
                current:this.state.current+1
            })
        }else{
            this.setState({
                current:0
        })
         }
    }
     
    render() {
 
        let person=<Contestant name={this.state.scores[this.state.current]}
        score={this.state.scores}/>

    
        return ( 
            <div>
                <div className='header' >
                    <Navbar/>  
                </div>
                <div className="main">
                    <div className="contestants" >
                        {this.state.scores.map((e,i)=><Contestant 
                        name={this.state.scores[i][0] }
                        score={this.state.scores[i][1] } key={i.toString()} /> )}                 
                    </div>   
                    <div className="quiz-box">
                        <div className='timer' ><Timer limit='1' /></div>
                        <div className="whoseturn">
                        {person}
              
                        </div>
                        
                        <div className="tools" ><QuizTools scores={this.state.scores}
                        handleUpdate={this.handleUpdate}/></div>
                        <div>
                             <div className = 'question'>
                            <span>Question : </span><qonQuestions questionTracker={this.state.questionTracker[-1 ]}/><span></span>
                            
                        </div>
                       </div>
                    </div>
                           
                </div>
            </div>
         );
    }
}
 
export default QuizOn;