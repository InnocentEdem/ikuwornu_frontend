import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './confirm.css';
import { Redirect } from "react-router-dom";

class ConfirmOrCancel extends Component {
    constructor(props) {
        super(props);
        this.state = {
           golive:false
          }
          this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        console.log('[handleclick]')
        localStorage.setItem("newQuiz", JSON.stringify(this.props.tempQuiz));
       this.setState({
           golive:true
       })
    }
   
    render() { 
        const tempQuiz= JSON.parse(localStorage.getItem('tempQuiz'));
        
        return ( 
            <div className='content'>
                
                <table>
                    <tr>
                        <td>Contestants</td><td>{tempQuiz.contestants.map(e=><div>{e}</div>)}</td>
                    </tr>
                    <tr>
                        <td>Minutes per Question</td><td>{tempQuiz.time_per_question}</td>
                    </tr>
                    <tr>
                    <td>Max/Min Points</td><td>{tempQuiz.max_question_point + `/`+ this.props.newQuiz.min_question_point}</td>
                    </tr>
                    <tr>
                    <td> Questions per Contestant</td><td>{tempQuiz.number_of_questions}</td>
                    </tr>
                </table>
                <div className='linksp'>
                <div className="links"><Link to ='/livequiz' style={{ textDecoration: "none",color:"inherit" }}>Go Live </Link></div>
                <div className="links"><Link to ='/' style={{ textDecoration: "none",color:"inherit" }}>Cancel </Link></div>
                <div className="links"><Link to ='/schedule' style={{ textDecoration: "none",color:"inherit" }}>Schedule</Link></div> 
                </div>
            </div>
         );
    }
}
 
export default ConfirmOrCancel;

