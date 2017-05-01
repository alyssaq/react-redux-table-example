# React Redux Table Example

[![Build Status](https://travis-ci.org/alyssaq/react-redux-table-example.png?branch=master)](https://travis-ci.org/alyssaq/react-redux-table-example)

Demo: <http://react-redux-table.surge.sh>

Features:

 * [React](https://facebook.github.io/react)-[Redux](http://redux.js.org) data flow
 * Fetch JSON from an API and render into a table
 * Filter and sort data in the table
 * Routing with [react-router](https://github.com/rackt/react-router)
 * Redux middlewares
 * Separate reducers and actions
 * ES6/ES7 with [babeljs](https://babeljs.io) (es2015, stage-0, react)
 * [Stylus](http://learnboost.github.io/stylus)
 * [Webpack 2+](https://webpack.github.io) dev and production
 * Eslint [standard](http://standardjs.com)
 * Unit tests with [mocha](https://mochajs.org) + [chai](http://chaijs.com)

## Install
```sh
$ npm install
```

## Run - Development
```sh
$ npm run dev       # builds and hot reloads on changes
```

## Run - Production
```sh
$ npm run build     # builds production assets (transpile, minify, etc)
$ npm start         # Start express server and serves index.html
```

## Docker
To run a production version in [docker](https://www.docker.com):
```sh
$ docker build -t react-redux-example .   # Build docker container
$ docker run -d --name react-redux-example -p 4000:4000 react-redux-example  # Run docker container
```
App will be running at <http://localhost:4000>

```sh
$ docker stop react-redux-example   # Stop container
```

## Tests
```sh
$ npm run lint      # Runs eslint
$ npm test          # Runs mocha
$ npm run test:dev  # Run mocha in watch mode
```

## Thanks

Data from [USDA nutrient API](http://ndb.nal.usda.gov/ndb/doc/apilist/API-NUTRIENT-REPORT.md)
