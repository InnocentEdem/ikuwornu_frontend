import axios from 'axios';
import React, { Component } from 'react';
import './form_qm.css'

class QmForm extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        let tag=event.target;
        this.setState({[tag.id]:[tag.value]})
        console.log(this.state.name, this.state.pword);
    } 

    handleSubmit(e){
        console.log('hi')
        let name =this.state.name[0];
        let pwd = this.state.pword[0];
        console.log("name,pwd")
       
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/login',
            data: {
              email: name,
              password: pwd
            },
            headers: {'Authorization': 'Bearer ...'}
          }).then(
              resp=>{this.props.jwtHandler(resp.data)   }  )
              .catch(e=> console.log(e))
        e.preventDefault()
    }

    render() {
      
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>  
                <br></br>        
                <input className='form-fields'  id= 'name'value={this.state.name} onChange={this.handleChange} required />
                <br></br>
                <label htmlFor='password'>Password</label> 
                <br></br>         
                <input className='form-fields' type='password' id= 'pword' onChange={this.handleChange} required /> 
                <br></br>  
                <input className='form-fields submit' type="submit" value="Submit" />
             </form>
         );
    }
}
 
export default QmForm;