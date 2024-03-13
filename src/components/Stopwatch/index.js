// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, istimerrunning: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onResetTimer = () => {
    clearInterval(this.timerId)
    this.setState({istimerrunning: false, time: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timerId)
    this.setState({istimerrunning: false})
  }

  onIncreaseTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({istimerrunning: true})
  }

  tick = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  renderSeconds = () => {
    const {time} = this.state
    const seconds = Math.floor(time % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {istimerrunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="card-container">
          <div className="stopwatch-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-img"
            />
            <h1 className="stopwatch-heading">Timer</h1>
          </div>
          <h1 className="timer">{time}</h1>
          <div className="button-container">
            <button
              type="button"
              className="button-1"
              onClick={this.onIncreaseTimer}
              disabled={istimerrunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button-2"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button-3"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
