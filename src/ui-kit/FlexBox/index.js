import React from 'react'

const FlexBox = ({ children, justify, align, ...restProps }) => {
  const style = {
    display: 'flex',
    justifyContent: justify,
    alignItems: align
  }
  return (
    <div style={style} {...restProps}>
      {children}
    </div>
  )
}

export default FlexBox
