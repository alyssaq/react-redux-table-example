import React from 'react' // eslint-disable-line
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import App from './containers/App'
import NutrientPage from './containers/NutrientPage'
import AboutPage from './containers/AboutPage'
import NotFoundPage from './containers/NotFoundPage'

export const history = createHistory()
export default (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={NutrientPage}/>
      <Route path='nutrients' component={NutrientPage} />
      <Route path='about' component={AboutPage} />
      <Route path='*' component={NotFoundPage}/>
    </Route>
  </Router>
)
