import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { card_config, categories } from './data'
import { rand_arr } from './util'

const random = { cards: rand_arr(2), imgs: rand_arr(8) } 
const props = { card_config, categories, random }
const div = document.getElementById('app')

ReactDOM.render(<App {...props} />, div)
