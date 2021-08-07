import { Component } from "react";
import './timer.css';
class Timer extends Component {
    state = {
        minutes: +this.props.limit,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div className='display' >
                { minutes === 0 && seconds === 0
                    ? <div>Time Up!</div>
                    : <div>Timer: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
                }
            </div>
        )
    }
}
 
export default Timer; 