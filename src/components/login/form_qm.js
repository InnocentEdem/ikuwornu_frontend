import React, { Component } from 'react';
import './form_qm.css'


class QmForm extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(event){
        let tag=event.target;
        this.setState({[tag.id]:[tag.value]})

    }
    handleClick(e){
        let target=e.target.id;
        console.log(target)
        
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
                <input className='form-fields' type='password' id= 'password' onChange={this.handleChange} required /> 
                <br></br>  
                <input className='form-fields submit' type="submit" value="Submit" />
             </form>
         );
    }
}
 
export default QmForm;