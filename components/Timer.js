import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { latest: Date.now() }
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.start()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.stop && nextProps.stop) this.stop()
    if (this.props.began !== nextProps.began) this.start()
  }

  start() {
    if (this.interval) return
    this.interval = setInterval(this.tick, 100)
  }

  stop() {
    clearInterval(this.interval)
    this.interval = null
  }

  tick() {
    this.setState({ latest: Date.now() })
  }

  render() {
    const { latest } = this.state
    const { began } = this.props
    const elapsed = (Math.max(0, (latest - began)) / 1000).toFixed(1)

    return <div>Timer: {elapsed} seconds</div>
  }
}

export default Timer
