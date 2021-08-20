import axios from 'axios';
import React, { Component } from 'react'; 
class qonQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        let token = JSON.parse(localStorage.getItem('token'));
        axios.get('http://localhost:4000/api/questions', {
        headers: {
            'Authorization': `token ${token}`
        }
        })
        .then((res) => {
       this.setState({questions:res.data})
        })
        .catch((error) => {
        console.error(error)
        })
            }

    render() { 
        return ( 
            <div>

            </div>

         );
    }
}
 
export default qonQuestions;