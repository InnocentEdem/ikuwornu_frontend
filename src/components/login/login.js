

import React,{Component} from 'react';
import login from './login.css';
import QmForm from './form_qm';

import axios from 'axios';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            role:'',
            userName:'',
            password:'',
            quizMaster:true,
            contestant:false
        }
       this.onSubmitHandler=this.onSubmitHandler.bind(this);

    }
  
    onSubmitHandler(username,password){
            
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    
    const url = 'http://localhost:4000/api/login'
    
    axios.post(url, {
      headers: {
        'Authorization': `Basic ${token}`
      }
    }).then()
    }
  
     
    render() { 
        
        return ( 
            <div>
                 <div className='header' >Quiz Master </div>
            <div className='login'>
               
              
                
                <div className="form"><QmForm/></div>
                 
            
              </div>
              </div>
         );
    } 
}
 
export default Login;