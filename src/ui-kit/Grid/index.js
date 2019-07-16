import React from 'react'

import styles from './Grid.module.css'

const Grid = ({ children, column }) => {
  const style = {
    gridTemplateColumns: column
  }
  return (
    <div className={styles.gridContainer} style={style}>
      {children}
    </div>
  )
}

export default Grid
