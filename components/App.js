import React from 'react'

import Card from './Card'
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { foo: null }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { deck } = this.props

    return (
      <div>
        <Header />
        <div className='p2 container'>
          <div className='clearfix mx1'>
            <div className='mb1 col col-6 md-col-4 px1'>
              <Card {...this.props} />
            </div>
          </div>
          {deck.map((d, i) => (
            <div key={i} className='h5'>{i}. {d.join(', ')}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
