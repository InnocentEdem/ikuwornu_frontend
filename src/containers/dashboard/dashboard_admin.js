import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import'./dashboard_admin.css';
import {Link} from 'react-router-dom';
import './dashboard_admin.css';
import axios from 'axios';

class DashboardAdmin extends Component {
    constructor(props) {
        super(props);
        this.addition=false;
        this.state = ({
            username:'',
            password:'',
            forceRender:0
          })
          this.handleChange=this.handleChange.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
    }
   
    handleSubmit(e){
        let target=e.target
        console.log(target.id);
        e.preventDefault()
        let name =this.state.username[0];
        let pwd = this.state.password[0];
        console.log(pwd);
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/register',
            data: {
              email: name,
              password: pwd
            },
            headers: {'Authorization': 'Bearer ...'}
          }).then(
              resp=>{ this.addition=true; this.setState({forceRender: 1})  }  )
              .catch(e=> console.log(e))
       
        e.preventDefault()
    }
    

    handleChange(e){
        const target=e.target;
        console.log(e)
        this.setState({[target.id]:[target.value]})
 
    }
    render() { 
        let admin;
        if(JSON.parse(localStorage.getItem('userData')).isAdmin===true){
            console.log('admin powers')
        admin=<div><Link to ='/admin_dashboard' style={{ textDecoration: "none",color:"inherit" }}>Add Qmaster</Link></div>
        }
        let successful;
        if(this.success===true){
            console.log('successful')
            successful=<div>Addition Successful!</div>
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
                    {admin}
                    </div>
                    <div className='content'> 
                        {successful}
                         <form className='form' onSubmit={this.handleSubmit} >
                         <label htmlFor='Username'>Username</label>         
                                <input id= 'username'type =' text' onChange={this.handleChange} value={this.state.username}/>
                               
                                <label htmlFor='minPoints'>Password</label>         
                                <input id= 'password'type = 'password' onChange={this.handleChange } value={this.state.password}/>
                                
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