import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from '../routes'
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory()

export default class Root extends React.Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>{routes}</Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}
