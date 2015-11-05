import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunkMiddleware from 'redux-thunk'
import { createHistory, useBasename } from 'history'
import routes from '../routes'
import rootReducer from '../reducers'

const baseTag = document.getElementsByTagName('base')[0]
const baseRoute = baseTag ? baseTag.getAttribute('href') : '/'
const createHistoryWithBasename = (historyOptions) => {
  return useBasename(createHistory)({
    basename: baseRoute,
    ...historyOptions
  })
}

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({
    routes,
    createHistory: createHistoryWithBasename
  })
)(createStore)

export default function configureStore (initialState) {
  return finalCreateStore(rootReducer, initialState)
}
