import React from 'react'

import Card from './Card'
import Header from './Header'

import data from '../data'
import make_deck from '../spot-it'
import { shuffle } from '../util'

const init_cat = 'food'
const categories = Object.keys(data)
const deck = k => shuffle(make_deck(7, shuffle(data[k])))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: init_cat,
      deck: deck(init_cat),
      idx: 0,
      correct: 0,
      wrong: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.nextPair = this.nextPair.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  nextPair() {
    const { idx } = this.state
    this.setState({ idx: idx + 2 })
  }

  render() {
    const { deck, idx, correct, wrong } = this.state
    const [c1, c2] = [deck[idx], deck[idx + 1]]

    return (
      <div>
        <Header />
        <div className='p2 container'>
          <div className='clearfix mb2 mx1'>
            <div className='col col-6 md-col-4 px1'>
              <Card card={c1} />
            </div>
            <div className='col col-6 md-col-4 px1'>
              <Card card={c2} />
            </div>
          </div>
          <div className='mb2'>
            {[c1, c2].map((d, i) => (
              <div key={i} className='h5'>{d.join(', ')}</div>
            ))}
          </div>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.nextPair}
          >
            Next pair
          </button>
        </div>
      </div>
    )
  }
}

export default App
