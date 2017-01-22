import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { rand } from './util'

const div = document.getElementById('app')
ReactDOM.render(<App rand={rand()} />, div)
