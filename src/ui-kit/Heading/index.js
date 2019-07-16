import React from 'react'

const H1 = ({ children, ...restProps }) => {
  return (
    <h1 {...restProps}>{children}</h1>
  )
}

const H2 = ({ children, ...restProps }) => {
  return (
    <h2 {...restProps}>{children}</h2>
  )
}

const H3 = ({ children, ...restProps }) => {
  return (
    <h3 {...restProps}>{children}</h3>
  )
}

export {
  H1,
  H2,
  H3
}
