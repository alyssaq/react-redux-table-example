import React from 'react'
import './Header.styl'
import { IndexLink } from 'react-router'
import Navigation from './Navigation'

class Header extends React.Component {
  render () {
    return (
      <header>
        <strong>
          <IndexLink to='/'> React Redux Example </IndexLink>
        </strong>
        <Navigation />
      </header>
    )
  }
}

export default Header
