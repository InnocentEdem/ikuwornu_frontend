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
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className='header' >
                    <Navbar/>  
                </div>
                <div className="main">
                    <div className="contestants" >
                    <Contestant name = 'Abena'/>
                    <Contestant name = 'Kwame'/>
                    </div>  
                    <div className="quiz-box">
                        <div className='timer' ><Timer limit='2' /></div>
                        <div className="whoseturn">
                        <Contestant name = 'Abena'/>
                       
                        </div>
                        
                        <div className="tools" ><QuizTools/></div>
                        <div> <div className = 'question'>
                            <span>Question : </span>What is the capital city of Japan?<span></span>
                            
                        </div>
                        <div className= 'answers' >
                            <div><span>Right Answer : </span>Tokyo<span></span></div>
                            <div><span>Contestant : </span> <span></span></div>

                        </div></div>
                    </div>
                    <div className='leaderboard' > <LeaderBoard/> </div>        
                </div>
            </div>
         );
    }
}
 
export default QuizOn;