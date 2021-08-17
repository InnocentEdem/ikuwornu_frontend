import React, { Component } from 'react';
import './createQuiz.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {ExcelRenderer, OutTable} from 'react-excel-renderer';
class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time:0, maxpts:0, minpts:0, NumQ:0
         }
         this.handleChange=this.handleChange.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        const target=e.target;
        this.setState({
        [target.name]:[target.value]
        })
    }
    handleSubmit(){
        axios({
            method: 'post',
            url: 'localhost:',
            data: {
              date_created: this.date_created.now(),
              max_question_point: this.maxpts,
              min_question_point: this.minpts,
              number_of_questions:this.NumQ,
              time_per_question:this.time

            },
            headers: {'Authorization': 'Bearer ...'}
          });
          const newQuiz={
            date_created: this.date_created.now(),
            max_question_point: this.maxpts,
            min_question_point: this.minpts,
            number_of_questions:this.NumQ,
            time_per_question:this.time,
            contestants:[this.cols,this.rows]
          }
          localStorage.setItem('newQuiz',JSON.stringify(newQuiz));
          this.redirectHandler()

    }
        redirectHandler() {      
            return  <Redirect  to="/livequiz" />   
     }
     fileHandler = (event) => {
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
                         
            <form className='form1' onSubmit={this.handleSubmit}>      
                                
                               <div className="input-main">
                               <label>UPLOAD Contestants</label>
                                <input type ='file' onChange={this.fileHandler} />
                                <br></br>
                               <label htmlFor='time'>Seconds per Question</label>         
                                <input id= 'time' type='number' value={this.state.time} onChange={this.handleChangea} />
                                <br></br> 
                                <label htmlFor='maxPoints'>Max Point</label>         
                                <input id= 'maxPoints'type = "number"min='1' max='180' value={this.state.maxpts} onChange={this.handleChange} />
                                <br></br> 
                                <label htmlFor='minPoints'>Min Point</label>         
                                <input id= 'minPoints'type = "number" min='1' value={this.state.minpts} onChange={this.handleChange} />
                                <br></br>
                                <label htmlFor='name'>Questions per Contestant</label>         
                                <input id= 'name'type = "number" value={this.state.NumQ} onChange={this.handleChange} /> 
                                <br></br>
                                <input className ='submit'type="submit" value="Create Quiz " />
                               </div>
                            </form> 
                            </div>
         );
    }
}
 
export default CreateQuiz;