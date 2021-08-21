import React, { Component } from 'react';
import './navbar.css';
import {Redirect,Link} from 'react-router-dom'
const axios = require('axios');

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          redirect:false
         }
         this.logoutHandler=this.logoutHandler.bind(this)
    }
    logoutHandler(){
      localStorage.setItem('logout','true')
      this.setState({ redirect: "/login" });
  
  }
    render() { 
      if (this.state.redirect) {
        return <Redirect to='/login' />
      }
        return ( 
                <nav>
                    <ul>
                        <li><Link to = "/addquestions" style={{ textDecoration: "none",color:"inherit" }} >Load Questions</Link></li>
                        <li><Link to= "/" style={{ textDecoration: "none",color:"inherit" }}>Create Quiz</Link></li>
                        <li onClick = {this.logoutHandler} >Logout</li>
                    </ul>
                </nav>
         );
    }
}
 
export default Navbar;