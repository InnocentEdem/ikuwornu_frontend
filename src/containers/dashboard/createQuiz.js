import React, { Component } from 'react';
import FileLoad from '../../utilities/file_load';
import './createQuiz.css'
class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time:0, bTime:0, maxpts:0, minpts:0, NumQ:0
         }
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                                <label>UPLOAD Contestants </label>   
                                <br></br>    
                                <div className='upload'><FileLoad/></div>
                                <br></br>  
                                <label htmlFor='time'>Minutes per Question</label>  
                                <br></br>        
                                <input id= 'time'type = "range" step='0.5' value={this.state.name} onChange={this.handleChange} />
                                <br></br>
                                <label htmlFor='bTime'>Bonus Question Minutes</label>  
                                <br></br>        
                                <input id= 'bTime'type = "range" step='0.5' value={this.state.name} onChange={this.handleChange} />
                                <br></br>  
                                <label htmlFor='maxPoints'>Max Points</label>  
                                <br></br>        
                                <input id= 'maxPoints'type = "number" value={this.state.name} onChange={this.handleChange} />
                                <br></br> 
                                <label htmlFor='minPoints'>Min Points(Bonus)</label>  
                                <br></br>        
                                <input id= 'minPoints'type = "number" value={this.state.name} onChange={this.handleChange} />
                                <br></br>
                                <label htmlFor='name'>Number of Questions</label>  
                                <br></br>        
                                <input id= 'name'type = "number" value={this.state.name} onChange={this.handleChange} /> 
                                <br></br>
                                <input className ='submit'type="submit" value="Create Quiz Session" />
                            </form> 
         );
    }
}
 
export default CreateQuiz;