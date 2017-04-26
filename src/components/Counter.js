// @flow
import React from 'react'
import connect from './connect'

class Counter extends React.Component {
  render() {
    const {appState, dispatch} = this.props

    const handleClickIncrement = () => {
      dispatch({
        type: 'increment-counter',
      })
    }

    const handleClickDecrement = () => {
      dispatch({
        type: 'decrement-counter',
      })
    }

    return <div>
      <p>count: {appState.count}</p>
      <p>
        <button type="button" onClick={handleClickIncrement}>increment</button>
        {' '}
        <button type="button" onClick={handleClickDecrement}>decrement</button>
      </p>
    </div>
  }
}

export default connect(Counter)
