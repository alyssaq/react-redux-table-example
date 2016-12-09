import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import NutrientPage from './containers/NutrientPage'
import AboutPage from './containers/AboutPage'
import NotFoundPage from './containers/NotFoundPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={NutrientPage} />
    <Route path='nutrients' component={NutrientPage} />
    <Route path='about' component={AboutPage} />
    <Route path='*' component={NotFoundPage} />
  </Route>
)
