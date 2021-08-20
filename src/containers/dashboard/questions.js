
import React, { Component } from 'react';
import "./questions.css"
import {ExcelRenderer} from 'react-excel-renderer';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    fileHandler (event){
        let fileObj = event.target.files[0];
      //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
          if(err){
            console.log(err);            
          }
          else{
            this.setState({
              cols: resp.cols,
              rows: resp.rows
            });
          }
        }); 
    }             
    render() {
         
        return ( 
            <div>
                <form onSubmit>
                    <div className='questions' >Load Questions</div>
                  <input type ='file' onChange={this.fileHandler} />
                  <br></br>
                   
                   <input type = 'Submit'/>

                </form>
                
                <div>
                
                </div>

            </div>
         );
    }
}
 
export default Questions;
