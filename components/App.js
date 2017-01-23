import React from 'react'

import Cards from './Cards'
import Categories from './Categories'
import Timer from './Timer'

import { categories, data, card_config } from '../data'
import make_deck from '../spot-it'
import { get_match, shuffle } from '../util'


const SHOW_ANSWER_PAUSE_MS = 600
const ROUNDS = 5

const rando_deck = pics => (
  shuffle(make_deck(7, shuffle(pics)).map(c => shuffle(c))).slice(0, ROUNDS * 2)
)

const new_game = category => ({
  category,
  deck: rando_deck(data[category]),
  idx: 0,
  correct: 0,
  wrong: 0,
  began: Date.now(),
  guessed: false,
  finished: false,
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
    const { guessed, finished } = this.state
    if (guessed || finished) return

    let { correct, wrong } = this.state
    if (selected === answer) correct += 1
    else wrong += 1

    this.setState({
      correct, wrong, guessed: true,
      finished: correct + wrong === ROUNDS,
    })
    setTimeout(this.nextPair, SHOW_ANSWER_PAUSE_MS)
  }

  nextPair() {
    const { idx, finished } = this.state
    if (finished) this.setState({ guessed: false })
    else this.setState({ idx: idx + 2, guessed: false })
  }

  render() {
    const { rand } = this.props
    const { category, deck, idx, correct, wrong, began, guessed, finished } = this.state
    const remaining = ROUNDS - correct - wrong
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
          finished={finished}
        />
        <div>Correct: {correct}, Wrong: {wrong}, Remaining: {remaining}</div>
        <Cards
          cards={[card1, card2]}
          match={match}
          rand={rand}
          guessed={guessed}
          card_config={card_config}
          category={category}
          onClick={this.clickCard}
        />
        {finished && <h2>All done!</h2>}
      </div>
    )
  }
}

export default App
