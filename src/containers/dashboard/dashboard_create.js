import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import CreateQuiz from './createQuiz';
import Questions from './questions';
import './dashboard.css'
import QuizOn from '../quiz_on/quizOn';

class DashboardCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <div className='Navbar' >
                <Navbar/>
               </div>
               <div className='main'>
                   <div className='menu'>
                       <div>Create Quiz</div>
                       <div>Questions</div>
                       <div>Live Quiz</div>
                   </div>
                   <div className='content'>
                       <CreateQuiz/>
                       {/* <Questions/> */}
                   </div>
                 

               </div>

            </div>
         );
    }
}
 
export default DashboardCreate;