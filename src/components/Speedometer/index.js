import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  increaseSpeed = () => {
    const {count} = this.state
    if (count !== 200) {
      this.setState({count: count + 10})
    }
  }

  applyBreak = () => {
    const {count} = this.state
    if (count !== 0) {
      this.setState({count: count - 10})
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="meter"
        />
        <h1>Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button type="button" className="acc" onClick={this.increaseSpeed}>
            Accelerate
          </button>
          <button type="button" className="brk" onClick={this.applyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
