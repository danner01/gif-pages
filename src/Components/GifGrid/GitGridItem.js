import React from 'react'
//import PropTypes from 'prop-types'

const GitGridItem = ({title,url}) => {

    console.log(title,url)

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}/>
      <p>{title}</p>
        </div>
  )
}

GitGridItem.propTypes = {}

export default GitGridItem