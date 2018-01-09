import React from 'react'
import ReactDOM from 'react-dom'

import Locker from './Locker'
import './style.css'

function getContainer() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  return div
}

let instance

function getInstance() {
  if (instance) {
    return instance
  }

  const container = getContainer()
  instance = ReactDOM.render(<Locker />, container)
  return instance
}

export default {
  show() {
    getInstance().show()
  },

  hide() {
    getInstance().hide()
  }
}
