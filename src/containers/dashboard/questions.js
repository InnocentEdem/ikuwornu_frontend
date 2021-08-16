import FileLoad from "../../utilities/file_load";
import React, { Component } from 'react';
import "./questions.css"

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className='fa title'>
                    Upload Questions
                    <div className='file-load'>
               <i class="fa fa-upload"></i>
               
               </div>
                    </div>
                
                <div>
                
                </div>

            </div>
         );
    }
}
 
export default Questions;
