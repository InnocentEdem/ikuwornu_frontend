import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import CreateQuiz from './createQuiz';
import './dashboard.css'
import {Link} from 'react-router-dom'
import './dashboard.css'
import ConfirmOrCancel from './confirm';


class DashboardCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enterDetails:true,        
          }
          this.handleChildData=this.handleChildData.bind(this)
    }
    handleChildData(newQuiz){
        localStorage.setItem("tempQuiz",JSON.stringify(newQuiz))
        if(localStorage.getItem('records')){
            let temp=JSON.parse(localStorage.getItem('records'));
            temp.push(newQuiz);
            localStorage.setItem('records',JSON.stringify(temp));
        }else{
            let temp=[];
            temp.push(newQuiz);
            localStorage.setItem('records',JSON.stringify(temp))
        }
        this.setState({
            newQuiz,
            enterDetails:false,
        })
    }
    render() { 
        let page;
        if( this.state.enterDetails){
            page= <CreateQuiz handleChildData={this.handleChildData}/>}
             else {
                 page = <ConfirmOrCancel newQuiz={JSON.parse(localStorage.getItem('tempQuiz'))}/>
                 console.log('confirmOrCancel called');
                }
        return ( 
            <div>
               <div className='Navbar' >
                <Navbar/>
               </div>
               <div className='main'>
                   <div className='menu'>
                   <div><Link to ='/' style={{ textDecoration: "none",color:"inherit" }}>Create Quiz</Link></div>
                       <div><Link to ='/schedule' style={{ textDecoration: "none",color:"inherit" }}>Schedule</Link></div> 
                       <div><Link to ='/admin_dashboard' style={{ textDecoration: "none",color:"inherit" }}>Add Qmaster</Link></div>
                   </div>
                   <div className='content'>
                      {page}         
                   </div>
                   </div>
                   
                 

               

            </div>
         );
    }
}
 
export default DashboardCreate;