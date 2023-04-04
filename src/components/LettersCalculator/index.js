// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onEnterText = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="bg">
          <div className="card">
            <h1 className="head">Calculate the Letters you enter</h1>
            <label htmlFor="phrase Text">Enter the phrase</label>
            <input
              type="text"
              className="search"
              id="phrase Text"
              onChange={this.onEnterText}
              value={count}
              placeholder="Enter the phrase"
            />
            <p className="p">No.of letters: {count.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
