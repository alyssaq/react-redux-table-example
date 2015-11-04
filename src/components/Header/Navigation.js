import React from 'react'
import { Link } from 'react-router'
import './Navigation.styl'

class Navigation extends React.Component {

  render () {
    return (
      <nav role='navigation'>
        <ul>
          <li>
            <Link to='/nutrients'>Nutrients</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
