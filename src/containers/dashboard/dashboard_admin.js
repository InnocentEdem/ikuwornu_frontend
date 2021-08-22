import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import'./dashboard_admin.css';
import {Link} from 'react-router-dom';
import './dashboard_admin.css';
import axios from 'axios';

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
        let name =this.state.username[0];
        let pwd = this.state.password[0];
        let token=JSON.parse(localStorage.getItem('userData').token)
        localStorage.setItem('newQuizMaster',[name,pwd,token])
    }

    handleChange(e){
        const target=e.target;
        this.setState({[target.id]:[target.value]})
 
    }
    render() { 
        let admin;
        if(JSON.parse(localStorage.getItem('userData')).isAdmin===true){
        admin=<Link to ='/admin_dashboard' style={{ textDecoration: "none",color:"inherit" }}>Add Qmaster</Link>
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
                    <div>{admin}</div>
                    </div>
                    <div className='content'> 
                         <form className='form' onSubmit={this.handleSubmit} >
                         <label htmlFor='Username'>Username</label>         
                                <input id= 'username'type =' text' onChange={this.handleChange}/>
                               
                                <label htmlFor='minPoints'>Password</label>         
                                <input id= 'password'type = 'password' onChange={this.handleChange}/>
                                
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