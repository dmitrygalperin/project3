import React, { Component } from 'react'

import { OWNER, MOVIES, TITLE, GITHUB } from './constants'
import Movie from './components/Movie'

class App extends Component {

  componentDidMount() {
    document.title = TITLE
  }

  render() {
    return (
      <div className="container">
        <h1>{TITLE}</h1>
        {MOVIES.map((movie, index) => <Movie key={index} movie={movie} />)}
        <div className="footer text-center mb-3">
          <a href={GITHUB} className="btn btn-lg btn-light">
  			    <i className="fa fa-lg fa-github mr-1" aria-hidden="true"></i>
            <span>{`${OWNER}'s Github`}</span>
    		  </a>
        </div>
      </div>
    )
  }
}

export default App
