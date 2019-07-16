import React from 'react'

const Img = ({ src, alt, ...restProps }) => {
  return (
    <img src={src} alt="logo" {...restProps} />
  )
}

export default Img
