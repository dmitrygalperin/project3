import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { OWNER, MOVIES, TITLE, GITHUB } from './constants'
import Movie from './components/Movie'

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>{TITLE}</h1>
        {MOVIES.map((movie, index) => <Movie key={index} movie={movie} />)}
        <h5>
          <a href={GITHUB} className="btn btn-lg btn-warning">
  			    <i class="fa fa-lg fa-github" aria-hidden="true"></i> {OWNER}'s Github
    		  </a>
        </h5>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired
}

export default App
