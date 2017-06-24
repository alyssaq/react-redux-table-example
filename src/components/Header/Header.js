import React from 'react'
import './Header.styl'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

export default (props) => {
  return (
    <header>
      <strong>
        <Link to='/'> React Redux Example </Link>
      </strong>
      <Navigation />
    </header>
  )
}
