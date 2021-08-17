import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'
const axios = require('axios');

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    logoutHandler(){
        axios.get('/user/logout')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    }
    render() { 
        return ( 
                <nav>
                    <ul>
                        <li><Link to = "/addquestions" style={{ textDecoration: "none",color:"inherit" }} >Load Questions</Link></li>
                        <li><Link to= "/" style={{ textDecoration: "none",color:"inherit" }}>Create Quiz</Link></li>
                        <li><Link to="/livequiz" style={{ textDecoration: "none",color:"inherit" }}>Live Quiz</Link></li>
                        <li onClick = {this.logoutHandler} >Logout</li>
                    </ul>
                </nav>
         );
    }
}
 
export default Navbar;