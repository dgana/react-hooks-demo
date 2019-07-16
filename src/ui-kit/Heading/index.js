import React from 'react'

class H1 extends React.Component {
  render() {
    const { children, ...restProps } = this.props
    return (
      <h1 {...restProps}>{children}</h1>
    )
  }
}

class H2 extends React.Component {
  render() {
    const { children, ...restProps } = this.props
    return (
      <h2 {...restProps}>{children}</h2>
    )
  }
}

class H3 extends React.Component {
  render() {
    const { children, ...restProps } = this.props
    return (
      <h3 {...restProps}>{children}</h3>
    )
  }
}

export {
  H1,
  H2,
  H3
}
