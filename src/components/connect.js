// @flow
import React from 'react'
import {appShape} from '../PropTypes'
import type {AppContext} from '../types'

const connect = (WrappedComponent: ReactClass<AppContext>) => class Connect extends React.Component {
  static contextTypes = appShape

  context: AppContext;

  render() {
    return <WrappedComponent {...this.context} />
  }
}

export default connect
