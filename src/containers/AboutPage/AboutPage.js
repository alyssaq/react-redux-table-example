import './AboutPage.styl'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='about'>
      <h1> About </h1>
      This example app serves as a boilerplate for my recurring use case: <br />
      <ol>
        <li> Request data from multiple APIs </li>
        <li> Transform/merge the data </li>
        <li> Display and interact via the UI </li>
      </ol>
      <p>
        With the app development flow out-of-the-way,
        I can focus on the data analytics and D3 visualisations.
      </p>
      <p>
        The learning never stops so any feedback, comments,
        criticisms are greatly welcomed!
      </p>
      <p> Source code at: &nbsp;
        <a href='https://github.com/alyssaq/react-redux-table-example'>
          <img className='github-logo' title='Github logo face'
            src='http://cdn.flaticon.com/svg/37/37819.svg' />
            /alyssaq/react-redux-table-example
        </a>
      </p>
    </div>
  )
}

export default AboutPage
