

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
        let formType;
        if (this.state.quizMaster){formType=<QmForm/>}
            else{formType=<ContestForm/>}
        return ( 
            <div className='login'>
              <div className='events'>
                 Event Schedule
                  
              </div>
              <div className='login-form'>
                <div className= 'login-select'>
                    <div className='role' onClick={this.changeToQm}>Quiz Master</div>
                    <div className='role' onClick={this.changeToCon}>Contestant</div>
                </div>
                <div className="form">{formType}</div>
                 
              </div>
              </div>
         );
    }
}
 
export default Login;