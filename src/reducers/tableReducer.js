import { ACTIONS } from '../constants'

function preprocessData (data) {
  const foods = data.report.foods

  return foods.reduce((arr, food) => {
    food.nutrients.forEach(nutrient => nutrient.food = food.name)
    return arr.concat(food.nutrients)
  }, [])
}

function handleTableActions (state, action) {
  switch (action.type) {
    case ACTIONS.REQUEST_NUTRIENTS_DATA:
      return { isFetching: true }
    case ACTIONS.RECEIVE_NUTRIENTS_DATA:
      return {
        isFetching: false,
        data: preprocessData(action.data)
      }
    case ACTIONS.FILTER_NUTRIENTS_DATA:
      return { filterString: action.filterString.toLowerCase() }
    case ACTIONS.SORT_NUTRIENTS_DATA:
      return {
        sortKey: action.sortKey,
        sortDesc: state.sortKey === action.sortKey ? !state.sortDesc : false
      }
    default:
      return state
  }
}

function tableReducers (state = {}, action) {
  switch (action.type) {
    case ACTIONS.REQUEST_NUTRIENTS_DATA:
    case ACTIONS.RECEIVE_NUTRIENTS_DATA:
    case ACTIONS.FILTER_NUTRIENTS_DATA:
    case ACTIONS.SORT_NUTRIENTS_DATA:
      return Object.assign({}, state, handleTableActions(state, action))
    default:
      return state
  }
}

export default tableReducers
