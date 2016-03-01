import React from 'react'

const NotFoundPage = (props) => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, but the page at <b> {window.location.pathname} </b> does not exist.</p>
    </div>
  )
}

export default NotFoundPage
