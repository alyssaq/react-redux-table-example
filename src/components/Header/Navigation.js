import React from 'react'
import { Link } from 'react-router'
import './Navigation.styl'

export default (props) => {
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
