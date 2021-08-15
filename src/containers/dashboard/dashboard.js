import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import CreateQuiz from './createQuiz';
import Questions from './questions';
import './dashboard.css'

class Dashboard extends Component {
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
               <div className='menu'>
                 

               </div>

            </div>
         );
    }
}
 
export default Dashboard;