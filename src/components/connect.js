// @flow
import React from 'react'
import {appShape} from '../PropTypes'
import type {AppContext} from '../types'

const getDisplayName = (WrappedComponent: ReactClass<any>): string =>
  WrappedComponent.displayName ||
  WrappedComponent.name ||
  'Component'

const connect = (WrappedComponent: ReactClass<AppContext>) => {
  return class Connect extends React.Component {
    static displayName = `Connect(${getDisplayName(WrappedComponent)})`
    static contextTypes = appShape

    context: AppContext;

    render() {
      return <WrappedComponent {...this.context} />
    }
  }
}

export default connect
