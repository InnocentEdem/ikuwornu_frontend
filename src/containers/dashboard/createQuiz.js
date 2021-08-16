import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
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
            <div>
            
                  
            <form className='form1' onSubmit={this.handleSubmit}>      
                                <div className='file-load'>
                                    <label></label>
                                    <div className='upload'>
                                        <i class="fa fa-upload"></i>UPLOAD Contestants<FileLoad/></div>
                                                                      
                                </div>
                                <div></div>
                                
                               <div className="input-main">
                               <label htmlFor='time'>Seconds per Question</label>         
                                <input id= 'time' type='number' value={this.state.name} onChange={this.handleChange} />
                                <br></br> 
                                <label htmlFor='maxPoints'>Max Point</label>         
                                <input id= 'maxPoints'type = "number"min='1' max='180' value={this.state.name} onChange={this.handleChange} />
                                <br></br> 
                                <label htmlFor='minPoints'>Min Point</label>         
                                <input id= 'minPoints'type = "number" min='1' value={this.state.name} onChange={this.handleChange} />
                                <br></br>
                                <label htmlFor='name'>Questions per Contestant</label>         
                                <input id= 'name'type = "number" value={this.state.name} onChange={this.handleChange} /> 
                                <br></br>
                                <input className ='submit'type="submit" value="Create Quiz " />
                               </div>
                            </form> 
                            </div>
         );
    }
}
 
export default CreateQuiz;