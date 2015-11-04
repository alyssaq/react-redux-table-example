import CONSTS from '../constants'
import fetchDispatch from './fetchUtils'

const nutrientSep = '&nutrients='
const apiProps = {
  url: CONSTS.USDA_NUTRIENTS_URL_WITH_APIKEY +
    nutrientSep + CONSTS.NUTRIENTS.join(nutrientSep),
  types: {
    request: CONSTS.ACTIONS.REQUEST_COUNTRYRCPT,
    receive: CONSTS.ACTIONS.RECEIVE_COUNTRYRCPT
  }
}

function shouldFetchData ({table}) {
  return (!table.data || !table.isFetching)
}

function fetchData () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

function filterBy (filterString) {
  return {
    type: CONSTS.ACTIONS.FILTER_COUNTRYRCPT,
    filterString
  }
}

function sortBy (sortKey) {
  return {
    type: CONSTS.ACTIONS.SORT_COUNTRYRCPT,
    sortKey
  }
}

export default { fetchData, filterBy, sortBy }
