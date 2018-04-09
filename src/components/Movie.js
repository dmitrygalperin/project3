import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RatingCircle from './RatingCircle'
import ButtonGroup from './ButtonGroup'

class Movie extends Component {

  state = this.props.movie

  minutesToHours = minutes => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  formatDate = date => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  createLink = (url, title) => {
    return <a href={url}>{title}</a>
  }

  handleThumbs = name => {
    this.setState({ [name]: this.state[name] + 1 })
  }

  handlePosterClick = () => {
    const { posterindex, posters } = this.state
    this.setState({
       posterindex: posterindex === posters.length-1 ? 0 : posterindex+1
    })
  }

  render() {
    const { minutesToHours, formatDate, createLink, handleThumbs, } = this
    const {
      posters,
      posterindex,
      title,
      country,
      runtime,
      released,
      rating,
      imdb,
      website,
      likes,
      dislikes,
      iscore
    } = this.state

    return (
      <div className="card" style={{ display: "inline-block", 'margin': '1rem' }}>
        <RatingCircle iscore={iscore} />
        <img className="card-img-top" style={{cursor: 'pointer', width: '500px', height: '750px'}} src={posters[posterindex]} alt="Movie poster" onClick={this.handlePosterClick} />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{title} ({country})</h5>
            <span className="text-muted small">Poster {posterindex+1} of {posters.length}</span>
          </div>
          <h6>Runtime: {minutesToHours(runtime)}</h6>
          <p className="card-text text-muted">
            Released: {formatDate(released)} | Rated: {rating}
          </p>
          <p>
            Websites: {createLink(imdb, 'IMDB')} | {createLink(website, 'Website')}
          </p>
          <ButtonGroup likes={likes} dislikes={dislikes} handleThumbs={handleThumbs} />
        </div>
      </div>
    );
  }

}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}

export default Movie;
