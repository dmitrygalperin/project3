import React, { Component } from 'react'

import { MOVIES } from './constants'
import Movie from './components/Movie'

class App extends Component {
  render() {
    return (
      <div className="container">
        {MOVIES.map((movie, index) => <Movie key={index} movie={movie} />)}
      </div>
    )
  }
}

export default App
