import React from 'react'

class Img extends React.Component {
  render() {
    const { src, alt, ...restProps } = this.props
    return (
      <img src={src} alt="logo" {...restProps} />
    )
  }
}

export default Img
