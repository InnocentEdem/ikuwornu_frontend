import { Component } from 'react';
import './leaderboard.css'
class LeaderBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <table>
               <thead>
                   <th>
                      <td>Position</td><td>Name</td><td>Points</td>
                   </th>
               </thead>
               <tbody>
                   <tr><td></td><td></td><td></td></tr>
               </tbody>
           </table>
         );
    }
}
 
export default LeaderBoard;