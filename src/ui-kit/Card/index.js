import React from 'react'
import style from './Card.module.css'

const Card = ({ children, ...restProps }) => {
  return (
    <div className={style.card} {...restProps}>
      {children}
    </div>
  )
}

export default Card
