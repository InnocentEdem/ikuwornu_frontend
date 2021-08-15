

import React,{Component} from 'react';
import login from './login.css';
import QmForm from './form_qm';
import ContestForm from './form_contest';

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
        this.changeToQm=this.changeToQm.bind(this);
        this.changeToCon=this.changeToCon.bind(this);

    }
    changeToCon(){
       
        const newState=!this.contestant; 
        this.setState({quizMaster:!newState,contestant:newState})
    }
    changeToQm(){ 
            const newState=!this.quizMaster  
            this.setState({quizMaster:newState,contestant:!newState})
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