import React from 'react'

const RatingCircle = ({ iscore }) => {

  const style = {
    borderRadius: '2rem',
    width: '4rem',
    height: '4rem',
    backgroundColor: '#30cca0',
    position: 'absolute',
    top: '2rem',
    right: '1rem'
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center text-white"
      style={style}
    >
      <i className="fa fa-star mr-1" aria-hidden="true"></i>
      {iscore}
    </div>
  )
}

export default RatingCircle
