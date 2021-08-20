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
               
                   <th>
                      <td>Position</td><td>Name</td><td>Points</td>
                   </th>
               
               <tbody>
                   <tr><td></td><td></td><td></td></tr>
               </tbody>
           </table>
         );
    }
}
 
export default LeaderBoard;