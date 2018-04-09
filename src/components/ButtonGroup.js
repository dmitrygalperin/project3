import React from 'react'

const ButtonGroup = ({ handleThumbs, likes, dislikes }) => {

  const style = { 'borderRadius': '40px' }

  return (
    <div className="float-right mb-3">
      <button className="btn btn-success mr-1" style={style} onClick={() => { handleThumbs('likes') }}>
        <i className="fa fa-thumbs-up mr-1" aria-hidden="true"></i>{likes}
      </button>
      <button className="btn btn-danger" style={style} onClick={() => { handleThumbs('dislikes') }}>
        <i className="fa fa-thumbs-down mr-1" aria-hidden="true"></i>{dislikes}
      </button>
    </div>
  )
}

export default ButtonGroup
