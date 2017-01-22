import React from 'react'

import Cards from './Cards'
import Categories from './Categories'
import Timer from './Timer'

import { categories, data, card_config } from '../data'
import make_deck from '../spot-it'
import { get_match, shuffle } from '../util'


const rando_deck = pics => (
  shuffle(make_deck(7, shuffle(pics)).map(c => shuffle(c)))
)

const new_game = category => ({
  category,
  deck: rando_deck(data[category]),
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
    this.clickCard = this.clickCard.bind(this)
    this.nextPair = this.nextPair.bind(this)
  }

  changeCategory(c) {
    if (c === this.state.category) return
    this.setState({ ...new_game(c) })
  }

  clickCard(selected, answer) {
    let { idx, correct, wrong } = this.state

    idx += 2
    if (selected === answer) correct += 1
    else wrong += 1

    this.setState({ idx, correct, wrong })
  }

  nextPair() {
    const { idx } = this.state
    this.setState({ idx: idx + 2 })
  }

  render() {
    const { rand } = this.props
    const { category, deck, idx, correct, wrong, began } = this.state
    const [card1, card2] = [deck[idx], deck[idx + 1]]
    const match = get_match(card1, card2)

    return (
      <div className='p2 container'>
        <Categories
          categories={categories}
          selected={category}
          onClick={this.changeCategory}
        />
        <Timer
          began={began}
          stop={idx >= 5}
        />
        <div>Index: {idx}, Correct: {correct}, Wrong: {wrong}</div>
        <Cards
          cards={[card1, card2]}
          match={match}
          rand={rand}
          card_config={card_config}
          category={category}
          onClick={this.clickCard}
        />
        <button
          type='button'
          className='btn btn-primary'
          onClick={this.nextPair}
        >
          Next pair
        </button>
      </div>
    )
  }
}

export default App
