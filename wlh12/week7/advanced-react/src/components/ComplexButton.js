import React from 'react'

const styles = {
  default: {
    color: '#0f0f0f',
    background: 'linear-gradient(to bottom, #98989877, #d8d8d8 65%, #ababab33 100%',
    borderRadius: '4px',
    padding: '.4rem 1rem',
    border: '1px solid #d8d8d8ab',
    outline: 'none',
    fontSize: '1rem'
  },
  disabled: {
    opacity: '.5'
  }
}

const ComplexButton = (props) => {
  let style = {...styles.default}
  if (props.disabled) {
    style = {...style, ...styles.disabled}
  }
  return (
    <button style={style}>Complex Button</button>
  )
}

export default ComplexButton