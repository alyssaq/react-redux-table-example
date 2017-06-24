import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.styl'

export default (props) => {
  return (
    <nav role='navigation'>
      <ul>
        <li>
          <NavLink to='/nutrients' activeClassName='active'>Nutrients</NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName='active'>About</NavLink>
        </li>
      </ul>
    </nav>
  )
}
