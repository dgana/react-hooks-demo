import React from 'react'
import styles from './Input.module.css'

const Input = ({ type, className, ...props }) => {
  const cn = `${styles.input} ${className}`
  return (
    <input type={type} className={cn} {...props} />
  )
}

export default Input
