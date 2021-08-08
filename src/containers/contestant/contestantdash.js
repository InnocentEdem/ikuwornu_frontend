import React, { Component } from 'react';
import Contestant from '../../components/contestant/contestant';
import Navbar from '../../components/navbar/navbar';
import Timer from '../../components/timer/timer';
import QuizTools from '../quiz_on/quiz_tools';
import LeaderBoard from '../quiz_on/leaderboard';
import "./contestantdash.css"

class ContestantView extends Component {
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
                        <div><Timer limit='2' /></div>
                        <div className="whoseturn">
                        <Contestant name = 'Abena'/>
                        </div>
                        <div> <div className = 'question'>
                            <span>Question : </span>What is the capital city of Japan?<span></span>
                            
                        </div>
                        <div className= 'answers' >    
                             <form onSubmit={this.handleSubmit}>
                                <label htmlFor='name'>Your Answer</label>  
                                <br></br>        
                                <input id= 'name'value={this.state.name} onChange={this.handleChange} />
                                <br></br>  
                                <input type="submit" value="Submit" />
                            </form>
                                            
                        </div></div>
                    </div>
                    <div> <LeaderBoard/> </div>        
                </div>
            </div>
        );
    }
}
 
export default ContestantView;