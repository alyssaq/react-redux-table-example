import './App.styl'
import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import { resetErrorMessage } from '../../actions'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    // Injected by React Redux
    errorMessage: React.PropTypes.any,
    resetErrorMessage: React.PropTypes.func,
    // Injected by React Router
    children: React.PropTypes.node
  }

  handleDismissClick (e) {
    e.preventDefault()
    this.props.resetErrorMessage()
  }

  renderErrorMessage () {
    const { errorMessage } = this.props
    if (!errorMessage) return null

    return (
      <p className='error'>
        {errorMessage}
        <span className='close' onClick={::this.handleDismissClick}>
          &#x2718;
        </span>
      </p>
    )
  }

  render () {
    const { children } = this.props
    return (
      <div>
        <Header />
        {this.renderErrorMessage()}
        <main>
        {children}
        </main>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage: resetErrorMessage
})(App)
