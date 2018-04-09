import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Movie extends Component {

  render() {
    const { movie } = this.props

    return (
      <div>
        {movie.title}
      </div>
    );
  }

}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}

export default Movie;
