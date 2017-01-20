import React from 'react'

import Card from './Card'
import CategoryNav from './CategoryNav'
import Header from './Header'
import Timer from './Timer'

import { categories, data } from '../data'
import make_deck from '../spot-it'
import { shuffle } from '../util'

const new_game = category => ({
  category,
  deck: shuffle(make_deck(7, shuffle(data[category]))),
  idx: 0,
  correct: 0,
  wrong: 0,
  began: Date.now(),
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...new_game('food') }
    this.changeCategory = this.changeCategory.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.nextPair = this.nextPair.bind(this)
  }

  changeCategory(c) {
    if (c === this.state.category) return
    this.setState({ ...new_game(c) })
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
    const { category, deck, idx, correct, wrong, began } = this.state
    const [card1, card2] = [deck[idx], deck[idx + 1]]

    return (
      <div>
        <Header />
        <div className='p2 container'>
          <CategoryNav
            categories={categories}
            selected={category}
            onClick={this.changeCategory}
          />
          <Timer began={began} stop={idx >= 20} />
          <div className='clearfix mb2 mx1'>
            <div className='col col-6 md-col-4 px1'>
              <Card card={card1} category={category} />
            </div>
            <div className='col col-6 md-col-4 px1'>
              <Card card={card2} category={category} />
            </div>
          </div>
          <div className='mb2'>
            <h3>deck index: {idx}</h3>
            {[card1, card2].map((d, i) => (
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
