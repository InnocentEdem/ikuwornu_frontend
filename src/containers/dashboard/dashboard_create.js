import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import CreateQuiz from './createQuiz';
import Questions from './questions';
import './dashboard.css'
import QuizOn from '../quiz_on/quizOn';
import {Link} from 'react-router-dom'
import './dashboard.css'


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
                   <div><Link to ='/' style={{ textDecoration: "none",color:"inherit" }}>Create Quiz</Link></div>
                       <div><Link to ='/addquestions' style={{ textDecoration: "none",color:"inherit" }}>Questions</Link></div>
                       <div><Link to ='/livequiz' style={{ textDecoration: "none",color:"inherit" }}>Live Quiz</Link></div>
                       <div><Link to ='/admin_dashboard' style={{ textDecoration: "none",color:"inherit" }}>Add Qmaster</Link></div>
                   </div>
                   <div className='content'>
                       <CreateQuiz/>
                      
                   </div>
                   </div>
                   
                 

               

            </div>
         );
    }
}
 
export default DashboardCreate;