import React from 'react'
import style from './Card.module.css'

class Card extends React.Component {
  render() {
    const { children, ...restProps } = this.props
    return (
      <div className={style.card} {...restProps}>
        {this.props.children}
      </div>
    )
  }
}  

export default Card
