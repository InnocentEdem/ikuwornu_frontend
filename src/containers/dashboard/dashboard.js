import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import Tab from '../../components/UI/atoms/menu_element';
import CreateQuiz from './createQuiz';
import Questions from './questions';

class Dashboard extends Component {
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
                <div className='main'>
                  <div className='menu'>
                    <Tab text='Create Quiz' tabColor = 'Blue'/>
                    <Tab text='Questions' tabColor = 'Blue'/>
                    <Tab text='Live Quiz' tabColor = 'Blue'/>
                  </div>
                  <div className='content'>
                    <Questions/>
                  </div> 

                </div>
            </div>
         );
    }
}
 
export default Dashboard;