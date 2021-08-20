import Navbar from '../../components/navbar/navbar';
import React, { Component } from 'react';
import './quizOn.css'
import Contestant from '../../components/contestant/contestant';
import Timer from '../../components/timer/timer';
import QuizTools from './quiz_tools';
import LeaderBoard from './leaderboard';

class  QuizOn extends Component {
    constructor(props) {
        super(props);    
         const quizData=localStorage.getItem('tempQuiz');
         localStorage.setItem('newQuiz',quizData);
         const newQuiz = JSON.parse(localStorage.getItem('newQuiz'));
         let initialScores = newQuiz.contestants.map(e=>[e,0]);
         console.log(initialScores)
         this.state = {
            scores:initialScores,
            max:initialScores.length,
            newQuiz,
            current:0 ,
            timer:false          
         }      
         this.updateScore=this.updateScore.bind(this);
     }
    
    componentDidMount(){

    }
    
    updateScore(score){
        let newscore=this.state.scores[this.state.current][1]+score      
        this.setState({
            scores:newscore
        });
        localStorage.setItem('scores',JSON.stringify(this.state.scores));
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
        let person=<Contestant name={this.state.scores[this.state.current][0]}
        score={this.state.scores[this.state.current][1]}/>

        return ( 
            <div>
                <div className='header' >
                    <Navbar/>  
                </div>
                <div className="main">
                    <div className="contestants" >
                        {this.state.scores.map((e,i)=><Contestant 
                        name={this.state.scores[i][0]}
                        score={this.state.scores[i][1]} key={i.toString()} /> )}                 
                    </div>   
                    <div className="quiz-box">
                        <div className='timer' ><Timer limit='1' /></div>
                        <div className="whoseturn">
                        {/* <Contestant name = 'Abena'/> */}
                        {person}
                       
                        </div>
                        
                        <div className="tools" ><QuizTools updateScore={this.updateScore}
                        min={this.state.newQuiz.min_question_point} max={this.state.newQuiz.max_question_point}/></div>
                        <div> <div className = 'question'>
                            <span>Question : </span>What is the capital city of Japan?<span></span>
                            
                        </div>
                        <div className= 'answers' >
                            <div><span>Right Answer : </span>Tokyo<span></span></div>
                            

                        </div></div>
                    </div>
                    <div className='leaderboard' > <LeaderBoard/> </div>        
                </div>
            </div>
         );
    }
}
 
export default QuizOn;