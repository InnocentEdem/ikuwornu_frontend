import React, { Component } from 'react';
import './createQuiz.css';
import axios from 'axios';
import {ExcelRenderer, } from 'react-excel-renderer';
class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time:0, maxpts:0, minpts:0, numQ:0
         }
         this.handleChange=this.handleChange.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        const target=e.target;
        console.log(e);
        this.setState({
        [target.id]:[target.value]
        })
    }
    handleSubmit(e){
     
      e.preventDefault();
        // axios({
        //     method: 'post',
        //     url: 'localhost:',
        //     data: {
        //       date_created: this.date_created.now(),
        //       max_question_point: this.maxpts,
        //       min_question_point: this.minpts,
        //       number_of_questions:this.NumQ,
        //       time_per_question:this.time

        //     },
        //     headers: {'Authorization': 'Bearer ...'}
        //   });

          const newQuiz={
            date_created: Date.now(),
            max_question_point: this.state.maxpts,
            min_question_point: this.state.minpts,
            number_of_questions:this.state.numQ,
            time_per_question:this.state.time,
            contestants:this.state.contestants,
            questions:this.state.questions
          }
          this.props.handleChildData(newQuiz);

    }
      
     fileHandler1 = (event) => {  
        let fileObj = event.target.files[0];
      //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
          if(err){
            console.log(err);            
          }
          else{
            let contArray=[]; 
            resp.rows.forEach(e=>{
              e.forEach(f=>contArray.push(f))
            });
              localStorage.setItem("contestants",contArray)
              this.setState({             
                contestants: contArray
              });
            }
          });                  
          }

        fileHandler2 = (event) => { 
          let fileObj = event.target.files[0];
        //just pass the fileObj as parameter
          ExcelRenderer(fileObj, (err, resp) => {
            if(err){
              console.log(err);            
            }
            else{
              let questArray=[]; 
              resp.rows.forEach(e=>{
                e.forEach(f=>questArray.push(f))
              });
              localStorage.setItem('questions',questArray)
              this.setState({             
                questions: questArray
              });
            }
          });               
          
          }

    render() { 
        return ( 
            <div>
            <form className='form1' onSubmit={this.handleSubmit}  >                        
                               <div className="input-main">
                               <div> <label>UPLOAD Contestants</label>
                                <input type ='file' onChange={this.fileHandler1} required/>
                                </div>
                                <br></br>
                                <label>UPLOAD Questions</label>
                                <input type ='file' onChange={this.fileHandler2} required/>
                                <br></br>
                               <label htmlFor='time'>Seconds per Question</label>         
                                <input id= 'time' type='number' value={this.state.time} onChange={this.handleChange} required/>
                                <br></br> 
                                <label htmlFor='maxpts'>Max Point</label>         
                                <input id= 'maxpts'type = "number"min='1' max='180' value={this.state.maxpts} onChange={this.handleChange} required />
                                <br></br> 
                                <label htmlFor='minpts'>Min Point</label>         
                                <input id= 'minpts'type = "number" min='1' value={this.state.minpts} onChange={this.handleChange} required/>
                                <br></br>
                                <label htmlFor='quesPer'>Questions per Contestant</label>         
                                <input id= 'numQ'type = "number" min='1' value={this.state.numQ} onChange={this.handleChange} required /> 
                                <br></br>
                                <input className ='submit'type="submit" value="Create Quiz " />
                               </div>
                            </form> 
                            </div>
         );
    }
}
 
export default CreateQuiz;