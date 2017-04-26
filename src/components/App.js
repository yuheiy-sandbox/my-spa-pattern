// @flow
import React from 'react'
import {appShape} from '../PropTypes'
import Counter from './Counter'
import type {AppState, Dispatch, AppContext} from '../types'

const initialState = {
  count: 0,
}

export default class App extends React.Component<void, {}, AppState> {
  static childContextTypes = appShape

  state = initialState

  dispatch: Dispatch = (action) => {
    switch (action.type) {

    case 'increment-counter':
      this.setState({count: this.state.count + 1})
      return

    case 'decrement-counter':
      this.setState({count: this.state.count - 1})
      return

    }
  }

  getChildContext(): AppContext {
    return {
      appState: this.state,
      dispatch: this.dispatch,
    }
  }

  render() {
    return <Counter />
  }
}
