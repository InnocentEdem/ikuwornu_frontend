
import Contestant from '../../components/contestant/contestant';
import Navbar from '../../components/navbar/navbar';
import React, { Component } from 'react';
import './quizOn.css'
import Timer from 'react.timer'
import QuizTools from './quiz_tools';
import QonQuestions from '../qonQuestions';
import Answers from '../answers'
class  QuizOn extends Component {
    constructor(props) {
        super(props);    
 
        const quizData=localStorage.getItem('tempQuiz');
        localStorage.setItem('newQuiz',quizData);
        this.newQuiz = JSON.parse(localStorage.getItem('newQuiz'));
        this.initialScores = this.newQuiz.contestants.map(e=>[e,0]);
        this.questions=this.newQuiz.questions;
        this.current=0;
        this.totalQues = this.newQuiz.number_of_questions[0]
        console.log('num',this.totalQues)
        this.ansTime = +this.newQuiz.time_per_question;
        this.questionTracker=[0];
        this.quesOnly=this.questions.filter((e,i)=>i%2===0);
        this.answOnly=this.questions.filter((e,i)=>i%2===1);
        this.isHidden=true;
        this.timer=false;
        this.state = { }; 
         this.handleUpdate=this.handleUpdate.bind(this);
        }
    

     componentDidMount(){
        console.log('[cdmount]');
        const quizData=localStorage.getItem('tempQuiz');
        localStorage.setItem('newQuiz',quizData);
        const newQuiz = JSON.parse(localStorage.getItem('newQuiz'));
        let initialScores = newQuiz.contestants.map(e=>[e,0]);
         const min = newQuiz.min_question_point[0];
         const maxim =  newQuiz.max_question_point[0];
         const num =  newQuiz.number_of_questions[0];
         console.log(num)
        
         this.setState({
            max:initialScores.length,
            newQuiz,
            current:0 ,
            timer:false,
            min,
            maxim,
            num,
            onTimer:false,
            questionCounter:1,
            forceRender:0  
         })
     }
     componentDidUpdate(){
        
     
     }
     componentWillUnmount(){
         let unfinished=this.state;
         localStorage.setItem('unfinished',unfinished)
     }

    handleUpdate(e){
        let target=e.target;
        if(this.questionTracker.length===this.totalQues * this.initialScores.length){return}
        
        this.setState({
           target
        })
       if(e==="minpt"){
           let d = +this.initialScores[this.current][1]
            this.initialScores[this.current][1] = d + (+this.state.min);
            let c=this.state.forceRender;
            this.setState({forceRender:c++})
            console.log(this.initialScores[this.state.current][1])
            console.log(this.current);
       }else if(e==="maxpt"){
            this.initialScores[this.current][1] += +this.state.maxim;
            let c=this.state.forceRender;
            this.setState({forceRender:c++})
       }else if(e==="timer"){
            this.timer=true;
            console.log(this.ansTime);
            let c=this.state.forceRender;
            this.setState({forceRender:c++})
           
       }else if(e==="next"){
           this.quest = this.questionHandler();
           this.currentQues=this.quesOnly[this.quest];
           this.currentAns = this.answOnly[this.quest];
           this.quesOnly.splice(this.quest,1);
           this.answOnly.splice(this.quest,1);
           this.isHidden=true;
           this.current<=this.state.num?this.current++:this.current=0;
           let c=this.state.questionCounter;
           this.setState({questionCounter:c++});
             
           
       }else if(e==="show"){
            this.isHidden=false;
            this.timer=false;
            let c=this.state.forceRender;
            this.setState({forceRender:c++})
       }
   }
   questionHandler(){
      let  random= Math.floor(Math.random() * this.quesOnly.length)
      console.log(random)
      return random;
   }
   
     
    render() {
       
        let person=<Contestant name={this.initialScores[this.current][0]}
        score={this.initialScores[this.current][1]}/>
        return ( 
            <div>
               
             
                <div className='header' >
                    <Navbar/>  
                </div>
                <div className="main"> 
                    <div className="contestants" >
                        {this.initialScores.map((e,i)=><Contestant 
                        name={e[0] }
                        score={e[1] } key={i.toString()} /> )}                 
                    </div>   
                    <div className="quiz-box">
                        <div className='timer' ><div>TIMER:__</div><div>{this.timer && <Timer countDown startTime={this.ansTime} />}</div></div>
                        <div className="whoseturn">
                        {person}
                        </div>
                        <div className='question'>
                        <div className='question' ><span>Question: </span><QonQuestions question={this.currentQues}/></div>
                        <div className='question' ><span>Answer: </span>{!this.isHidden && <Answers  answer={this.currentAns} />}</div>
                    </div>
                    <div className="tools" ><QuizTools 
                            handleUpdate={this.handleUpdate}/>
                    </div>
                      
                    </div> 
                           
                 </div>
            </div>
         );
    }
}
 
export default QuizOn;
