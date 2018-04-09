import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    } = this.state

    const btnStyle = {'borderRadius': '40px'}

    return (
      <div className="card" style={{ display: "inline-block", 'margin': '1rem' }}>
        <img className="card-img-top" src={posters[posterindex]} alt="Movie poster" />
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
          <div className="float-right mb-3">
            <button className="btn btn-success mr-1" style={btnStyle} onClick={() => { handleThumbs('likes') }}>
              <i className="fa fa-thumbs-up mr-1" aria-hidden="true"></i>{likes}
            </button>
            <button className="btn btn-danger" style={btnStyle} onClick={() => { handleThumbs('dislikes') }}>
              <i className="fa fa-thumbs-down mr-1" aria-hidden="true"></i>{dislikes}
            </button>
          </div>
        </div>
      </div>
    );
  }

}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}

export default Movie;
