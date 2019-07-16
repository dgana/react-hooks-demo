import React from 'react'
import styles from './Input.module.css'

class Input extends React.Component {
  render() {
    const { type, className, ...props } = this.props
    const cn = `${styles.input} ${className}`
    return (
      <input type={type} className={cn} {...props} />
    )
  }
} 
export default Input
