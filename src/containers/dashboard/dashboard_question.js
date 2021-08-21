import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import Questions from './questions';
import './dashboard.css'
import {Link} from 'react-router-dom';
import './dashboard.css'
import {ExcelRenderer, OutTable} from 'react-excel-renderer';

class DashboardQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    fileHandler (event){
        let fileObj = event.target.files[0];
      //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
          if(err){
            console.log(err);            
          }
          else{
            this.setState({
              cols: resp.cols,
              rows: resp.rows
            });
          }
        });
    } 

    render(){ 
        return ( 
            <div>
               <div className='Navbar' >
                <Navbar/>
               </div>
               <div className='main'>
                   <div className='menu'>
                       <div><Link to ='/' style={{ textDecoration: "none",color:"inherit" }}>Create Quiz</Link></div>
                       <div><Link to ='/addquestions' style={{ textDecoration: "none",color:"inherit" }}>Questions</Link></div>
                      
                       <div><Link to ='/admin_dashboard' style={{ textDecoration: "none",color:"inherit" }}>Add Qmaster</Link></div>
                   </div>
                   <div className='content'>
                       <Questions/>
                   </div>
                </div>      

            </div>
         );
    }
}
 
export default DashboardQuestions;