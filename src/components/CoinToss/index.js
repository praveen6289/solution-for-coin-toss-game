// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {toss: 0, total: 0, heads: 0, tails: 0}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        toss: tossResult,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        toss: tossResult,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {toss, total, heads, tails} = this.state
    const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const resultImg = toss === 0 ? headImg : tailImg
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={resultImg} alt=" toss result" className="toss-img" />
          <div>
            <button
              className="toss-coin-button"
              type="button"
              onClick={this.onClickToss}
            >
              Toss Coin
            </button>
          </div>
          <div className="result-container">
            <p className="result">Total:{total}</p>
            <p className="result">Heads:{heads}</p>
            <p className="result">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
