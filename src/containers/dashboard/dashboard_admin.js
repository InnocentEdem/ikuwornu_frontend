import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import CreateQuiz from './createQuiz';
import Questions from './questions';
import './dashboard.css'
import QuizOn from '../quiz_on/quizOn';
import'./dashboard_admin.css'

class DashboardAdmin extends Component {
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
                       <div>Add Quizmaster</div>
                   </div>
                   <div className='content'> 
                         <form className='form' >
                         <label htmlFor='Username'>Username</label>         
                                <input id= 'username'type =' text' />
                               
                                <label htmlFor='minPoints'>Password</label>         
                                <input id= 'password'type = 'password' />
                                
                                <input id='submit'type = 'Submit' />
                                <br></br>
                         </form>
                   </div>
                 

               </div>

            </div>
         );
    }
}
 
export default DashboardAdmin;