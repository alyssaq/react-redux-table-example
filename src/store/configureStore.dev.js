import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()
const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  reduxReactRouter({ routes, createHistory })
)(createStore)

export default function configureStore (initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
