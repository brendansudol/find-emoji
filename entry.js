import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { card_config, categories } from './data'
import { rand } from './util'

const div = document.getElementById('app')
const props = { card_config, categories, rand: [rand(), rand()] }
ReactDOM.render(<App {...props} />, div)
