import React from 'react'
import { connect } from 'react-redux'

class NotFoundPage extends React.Component {
  static propTypes = {
    pathname: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Sorry, but the page at <b> {this.props.pathname} </b> does not exist.</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    pathname: state.router.location.pathname
  }
}

export default connect(mapStateToProps)(NotFoundPage)
