import React, { Component } from 'react'

export default class Locker extends Component {
  state = { visible: false }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    const style = { display: visible ? '' : 'none' }
    return <div className="locker" style={ style }>Fake Locker</div>
  }
}