
import React, { Component } from 'react'; 
class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   

    render() { 
       
        return ( 
            <div>
               
                   
                   { this.props.answer}
               

            </div>

         );
    }
}
 
export default Answers;