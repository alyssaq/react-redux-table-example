import fetch from 'isomorphic-fetch'
import { ACTIONS } from '../constants'

function handleResponse (response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  }
  throw new Error(formatErrorMessage(response))
}

function formatErrorMessage (res) {
  return `[${res.status}]: ${res.statusText} (${res.url})`
}

// Error action that is dispatched on failed fetch requests
function errorAction (error) {
  return {
    type: ACTIONS.SET_ERROR_MESSAGE,
    error: true,
    errorMessage: error.message
  }
}

// Generic fetchDispatch utility that dispatches 3 actions:
//  Request, Receive and Error
// @param {object} opts:
//  {
//    url: {string} - url to request
//    types: {
//      request: {string} - constant when fetch begins a request,
//      receive: {string} - constant when fetch has successfully received a request
//    },
//    onReceived: {func(data)} - function to invoke when request has succeeded.
//      It must return a object associated with a successful fetch action.
//      First parameter is the json response. By default, data is return in the object
//      Default success action: {type: opts.types.receive, data: data}
//  }
export default function fetchDispatch (opts) {
  return (dispatch) => {
    dispatch({ type: opts.types.request })

    return fetch(opts.url, { headers: opts.headers || {} })
      .then(handleResponse)
      .then((data) => { // Dispatch the recevied action with type and data
        const obj = opts.onReceived ? opts.onReceived(data) : { data }
        return dispatch(Object.assign({ type: opts.types.receive }, obj))
      }).catch((error) => dispatch(errorAction(error)))
  }
}
