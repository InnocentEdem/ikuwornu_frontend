import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Dashboard</li>
                        <li>Quiz</li>
                        <li>Logout</li>
                    </ul>
                </nav>
         );
    }
}
 
export default Navbar;