import { Component } from 'react';
import './contestant.css';
class Contestant extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            score:0
         }
    }
    render() { 
        let imageSrc;
        if(!this.props.imageUrl){
            imageSrc='https://via.placeholder.com/100?text='+ this.props.name;

        }else{
            imageSrc=this.props.imageUrl;
        }
        return ( 
            <div className="person">
                <div><img src={imageSrc} alt='Contestant IMG'/></div>
                <div >{this.props.name}</div>
                <div>Score : {this.state.score}</div> 
                        
            </div>
         );
    }
}
 
export default Contestant;