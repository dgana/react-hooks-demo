import React from 'react'

class FlexBox extends React.Component {
  render() {
    const { children, justify, align, ...restProps } = this.props
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
}

export default FlexBox
