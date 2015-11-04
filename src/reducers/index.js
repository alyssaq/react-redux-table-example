import { routerStateReducer as router } from 'redux-router'
import { ACTIONS } from '../constants'
import { combineReducers } from 'redux'
import table from './tableReducer'

// Updates error message to notify about the failed fetches.
function errorMessage (state = {}, action) {
  const { type, error } = action

  if (type === ACTIONS.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.errorMessage
  }

  return state
}

const rootReducer = combineReducers({
  table,
  errorMessage,
  router
})

export default rootReducer
