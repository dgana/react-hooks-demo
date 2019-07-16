import React from 'react'
import styles from './Grid.module.css'

class Grid extends React.Component {
  render() {
    const { children, column } = this.props
    const style = {
      gridTemplateColumns: column
    }
    return (
      <div className={styles.gridContainer} style={style}>
        {children}
      </div>
    )
  }
}

export default Grid
