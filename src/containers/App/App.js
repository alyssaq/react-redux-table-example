import './App.styl'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { resetErrorMessage } from '../../actions'
import Header from '../../components/Header'
import NutrientPage from '../NutrientPage'
import AboutPage from '../AboutPage'
import NotFoundPage from '../NotFoundPage'

class App extends React.Component {
  handleDismissClick () {
    return (e) => {
      e.preventDefault()
      this.props.resetErrorMessage()
    }
  }

  renderErrorMessage () {
    const { errorMessage } = this.props
    if (!errorMessage) return null

    return (
      <p className='error'>
        {errorMessage}
        <span className='close' onClick={this.handleDismissClick()}>
          &#x2718;
        </span>
      </p>
    )
  }

  render () {
    return <BrowserRouter>
      <div>
        <Header />
        {this.renderErrorMessage()}

        <main>
          <Switch>
            <Route path='/' exact component={NutrientPage} />
            <Route path='/nutrients' exact component={NutrientPage} />
            <Route path='/about' exact component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  }
}

App.propTypes = {
  errorMessage: PropTypes.any,
  resetErrorMessage: PropTypes.func
}

export default connect(
  (state) => ({ errorMessage: state.errorMessage }),
  { resetErrorMessage: resetErrorMessage }
)(App)
