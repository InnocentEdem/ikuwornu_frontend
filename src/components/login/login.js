

import React,{Component} from 'react';
import login from './login.css';
import QmForm from './form_qm';

import axios from 'axios';
class Login extends Component {

    constructor(props){
        super(props);
        this.state={      
        }
       this.onSubmitHandler=this.onSubmitHandler.bind(this);
    }
    onSubmitHandler(username,password){      
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