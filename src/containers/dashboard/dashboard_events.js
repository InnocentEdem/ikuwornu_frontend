import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import './dashboard.css'
import {Link} from 'react-router-dom';
import './dashboard.css'
import './dashboard_events.css'

class DashboardEvents extends Component {
    constructor(props) {
        super(props);
        this.records= JSON.parse(localStorage.getItem('records'));
        this.recordsObj=[];
        
        if(this.records!==null){
         let recordsObj=this.records.map(e=> {const {date_created,contestants}=e})
        }
        this.state = {  }
      }
    
   componentDidMount(){
     
   }

    render(){ 
        let admin;
        if(JSON.parse(localStorage.getItem('userData')).isAdmin===true){
            console.log('admin powers')
        admin=<div><Link to ='/admin_dashboard' style={{ textDecoration: "none",color:"inherit" }}>Add Qmaster</Link></div>
        }
        return ( 
            <div>
               <div className='Navbar' >
                <Navbar/>
               </div>
               <div className='main'>
                   <div className='menu'>
                       <div><Link to ='/' style={{ textDecoration: "none",color:"inherit" }}>Create Quiz</Link></div>
                       <div><Link to ='/schedule' style={{ textDecoration: "none",color:"inherit" }}>Schedule</Link></div> 
                      {admin}
                   </div>
                   <div className='content'>
                       <table>
                           <th><td>Date Created</td><td>Contestants</td></th>
                           {this.recordsObj.map(e=> <tr><td>e.date</td><td>e.contestants</td></tr>)}

                       </table>
                   </div>
                </div>      

            </div>
         );
    }
}
 
export default DashboardEvents;