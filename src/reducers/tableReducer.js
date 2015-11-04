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
    case ACTIONS.REQUEST_COUNTRYRCPT:
      return { isFetching: true }
    case ACTIONS.RECEIVE_COUNTRYRCPT:
      console.log(preprocessData(action.data))
      return {
        isFetching: false,
        data: preprocessData(action.data)
      }
    case ACTIONS.FILTER_COUNTRYRCPT:
      console.log(action.filterString)
      return { filterString: action.filterString.toLowerCase() }
    case ACTIONS.SORT_COUNTRYRCPT:
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
    case ACTIONS.REQUEST_COUNTRYRCPT:
    case ACTIONS.RECEIVE_COUNTRYRCPT:
    case ACTIONS.FILTER_COUNTRYRCPT:
    case ACTIONS.SORT_COUNTRYRCPT:
      return Object.assign({}, state, handleTableActions(state, action))
    default:
      return state
  }
}

export default tableReducers
