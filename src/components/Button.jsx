import React from 'react'
import PropTypes from 'prop-types';

const Button = ({color, title, onClick}) => {
  return (
    <button className='btn' style={{backgroundColor: color}} onClick={onClick}>{title}</button>
  )
}


Button.defaultProps = {
    color: 'steelblue'
}

Button.prototype = {
    title : PropTypes.string,
    color : PropTypes.string,
    onClick:PropTypes.func,
}

export default Button