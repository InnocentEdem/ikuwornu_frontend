

import React,{Component} from 'react';
import { Redirect } from 'react-router';
import login from './login.css';
import QmForm from './form_qm';
class Login extends Component {

    constructor(props){
        super(props);
        this.state={ 
            redirect:false     
        }
        this.jwtHandler=this.jwtHandler.bind(this);   
    }
    jwtHandler(data){
        console.log(data)
       this.setState({
       data
     })
     localStorage.setItem('userData',JSON.stringify(data));
     localStorage.setItem('login','true');
     this.props.authorization()
     this.setState({
         redirect:true
     })
    } 
    
    render() { 
        if (this.state.redirect) {
            return <Redirect to='/schedule' />
          }    
        return ( 
            <div>
                 <div className='header'>Quiz Master </div>
                 <div className='login'>  
                 <div className="form"><QmForm jwtHandler={this.jwtHandler}/></div>      
              </div>
              </div>
         );
    } 
}
export default Login;