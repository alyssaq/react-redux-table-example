import { ACTIONS } from '../constants'

export function listFoodWithNutrients (data) {
  const foods = data.report.foods

  return foods.reduce((arr, food) => {
    food.nutrients.forEach((nutrient) => {
      nutrient.food = food.name
    })
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
        data: listFoodWithNutrients(action.data)
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

function tableReducer (state = {}, action) {
  return Object.assign({}, state, handleTableActions(state, action))
}

export default tableReducer
