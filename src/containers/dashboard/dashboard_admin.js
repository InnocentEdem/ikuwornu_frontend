import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import './dashboard.css'
import'./dashboard_admin.css';
import {Link} from 'react-router-dom';
import './dashboard.css';

class DashboardAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            username:'',
            password:''
          })
          this.handleChange=this.handleChange.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
       
    }
    handleChange(e){
        const target=e.target;
        this.setState({[target.id]:[target.value]})
 
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