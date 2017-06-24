import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

// Define the initial state properties here
const initialAppState = {
  table: {
    isFetching: false,
    data: [],
    filterString: '',
    sortDesc: false,
    sortKey: 'nutrient'
  },
  errorMessage: null
}

const store = configureStore(initialAppState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
