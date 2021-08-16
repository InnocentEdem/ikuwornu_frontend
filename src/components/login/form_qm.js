import React, { Component } from 'react';
import './form_qm.css'


class QmForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'',password:'' }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        let tag=event.target.id;
       if(tag==='name'){this.setState({name:tag.value})}

    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>  
                <br></br>        
                <input className='form-fields'  id= 'name'value={this.state.name} onChange={this.handleChange} />
                <br></br>
                <label htmlFor='password'>Password</label> 
                <br></br>         
                <input className='form-fields' type='password' id= 'password' onChange={this.handleChange} /> 
                <br></br>  
                <input className='form-fields submit' type="submit" value="Submit" />
             </form>
         );
    }
}
 
export default QmForm;