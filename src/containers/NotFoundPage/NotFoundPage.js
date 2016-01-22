import React from 'react'
import { connect } from 'react-redux'

const NotFoundPage = props => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, but the page at <b> {props.pathname} </b> does not exist.</p>
    </div>
  )
}

NotFoundPage.propTypes = {
  pathname: React.PropTypes.string.isRequired
}

function mapStateToProps (state) {
  return {
    pathname: state.router.location.pathname
  }
}

export default connect(mapStateToProps)(NotFoundPage)
