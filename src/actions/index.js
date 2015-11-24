import CONSTS from '../constants'
import tableActions from './tableActions'

function resetErrorMessage () {
  return { type: CONSTS.ACTIONS.RESET_ERROR_MESSAGE }
}

export {
  tableActions,
  resetErrorMessage
}
