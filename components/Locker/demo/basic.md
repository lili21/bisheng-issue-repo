---
category: Components
title: 基本用法
order: 1
---

```jsx
import { Locker } from 'components'

// error!!!
// Locker.show()

// workaround
// setTimeout(() => {
//   Locker.show()
// })

class LockerDemo extends React.Component {
  show() {
    Locker.show()

    setTimeout(() => {
      console.log('hello')
      Locker.hide()
    }, 2000)
  }

  render() {
    return (
      <div>
        <button onClick={this.show}>show locker</button>
      </div>
    )
  }
}

ReactDOM.render(<LockerDemo />, mountNode)
```
