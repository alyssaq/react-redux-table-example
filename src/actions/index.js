import { ACTIONS } from '../constants'
import tableActions from './tableActions'

function resetErrorMessage () {
  return { type: ACTIONS.RESET_ERROR_MESSAGE }
}

export {
  tableActions,
  resetErrorMessage
}
