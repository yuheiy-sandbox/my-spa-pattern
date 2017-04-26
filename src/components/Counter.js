// @flow
import React from 'react'
import connect from './connect'
import type {AppContext} from '../types'

function Counter({count, increment, decrement}) {
  return <div>
    <p>count: {count}</p>
    <p>
      <button type="button" onClick={increment}>increment</button>
      {' '}
      <button type="button" onClick={decrement}>decrement</button>
    </p>
  </div>
}

Counter = (fn => {
  return ({appState: {count}, dispatch}: AppContext) => {
    return fn({
      count,
      increment: () => dispatch({type: 'increment-counter'}),
      decrement: () => dispatch({type: 'decrement-counter'}),
    })
  }
})(Counter)
Counter.displayName = 'Counter'

export default connect(Counter)
