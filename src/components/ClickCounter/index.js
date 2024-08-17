// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="headingEl">Button has beeen clicked</h1>
          <h1 className="headingElremaining">
            <span className="spanEl">{count}</span>
            times
          </h1>
          <p className="paraEl">Click the button to increase the count!</p>
          <button className="buttonEl" onClick={this.increaseCount}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
