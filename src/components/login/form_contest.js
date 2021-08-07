import { Component } from "react";

class ContestForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            code:''
         }
         this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){  
      this.setState({code:event.target.value})
      console.log(this.state.code)
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'> Enter Code</label>  
                <br></br>        
                <input id= 'name'value={this.state.code} onChange={this.handleChange} />
                <br></br> 
                <input type="submit" value="Submit" />
             </form>
         );
    }
}
 
export default ContestForm;