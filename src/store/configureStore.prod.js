import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({ routes, createHistory })
)(createStore)

export default function configureStore (initialState) {
  return finalCreateStore(rootReducer, initialState)
}
