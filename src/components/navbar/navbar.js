import React, { Component } from 'react';
import './navbar.css';
import {Redirect,Link} from 'react-router-dom'


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
      localStorage.setItem('userData','')
      this.setState({ redirect: "/login" });
  
  }
    render() { 
      if (this.state.redirect) {
        return <Redirect to='/login' />
      }
        return ( 
                <nav>
                    <ul>
                        <li><Link to = "/schedule" style={{ textDecoration: "none",color:"inherit" }} >Schedule</Link></li>
                        <li><Link to= "/" style={{ textDecoration: "none",color:"inherit" }}>Create Quiz</Link></li>
                        <li><Link to = "/livequiz" style={{ textDecoration: "none",color:"inherit" }} >Live Quiz</Link></li>
                        <li onClick = {this.logoutHandler} >Logout</li>
                    </ul>
                </nav>
         );
    }
}
 
export default Navbar;