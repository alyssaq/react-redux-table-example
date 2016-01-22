# React Redux Table Example

Demo: <http://react-redux-table.surge.sh>

Features:

 * [React](https://facebook.github.io/react)-[Redux](http://redux.js.org) data flow
 * Fetch JSON from an API and render into a table
 * Filter and sort data in the table
 * Routing with [react-router](https://github.com/rackt/react-router) and [redux-router](https://github.com/rackt/redux-router)
 * Redux middlewares
 * Separate reducers and actions
 * ES6/ES7 with [babeljs](https://babeljs.io) (es2015, stage-0, react)
 * [Stylus](http://learnboost.github.io/stylus)
 * [Webpack](https://webpack.github.io) dev and production
 * Eslint [standard](http://standardjs.com)
 * [mocha](https://mochajs.org) + [chai](http://chaijs.com)

## Install

    $ npm install

## Run - Development

    $ npm run dev    # builds and hot reloads on changes

## Run - Production

    $ npm run build  # builds production assets (transpile, minify, etc)
    $ npm start      # Start express server and serves index.html

## Tests
Tests and code coverage are run using [karma](http://karma-runner.github.io) and mocha

    $ npm run lint   # Runs eslint
    $ npm test

## Thanks

Data from [USDA nutrient API](http://ndb.nal.usda.gov/ndb/doc/apilist/API-NUTRIENT-REPORT.md)
