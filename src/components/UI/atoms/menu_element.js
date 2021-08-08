
import React, { Component } from 'react';
import "./Tab.css" ;

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className='tab' onClick= {this.props.handleClick} style={{backgroundColor:this.props.tabColor,
           textAlign:this.props.align }}>
            {this.props.text}

        </div> );
    }
}
 
export default Tab;