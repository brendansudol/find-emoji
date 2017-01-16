import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import animals from './animals'
import make_deck from './spot-it'
import { shuffle } from './util'

const deck = make_deck(7, shuffle(animals))

const div = document.getElementById('app')
ReactDOM.render(<App deck={deck} />, div)
