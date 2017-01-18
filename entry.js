import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import data from './data'
import make_deck from './spot-it'
import { shuffle } from './util'

const { animals, ...rest } = data
const deck = make_deck(7, shuffle(animals))

const div = document.getElementById('app')
ReactDOM.render(<App deck={deck} {...rest} />, div)
