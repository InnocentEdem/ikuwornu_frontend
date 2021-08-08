import FileLoad from "../../utilities/file_load";
import React, { Component } from 'react';
import './questions.css'

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <label>UPLOAD list of Questions</label>
               <div className='file-load'>
               <FileLoad/>
               </div>
            </div>
         );
    }
}
 
export default Questions;
