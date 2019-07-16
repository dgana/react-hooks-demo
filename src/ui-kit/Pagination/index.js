import React from 'react'
import Img from 'ui-kit/Img'
import leftArrow from 'assets/left.png'
import rightArrow from 'assets/right.png'

import styles from './Pagination.module.css'

class Pagination extends React.Component {
  render() {
    const { prev, next } = this.props
    return (
      <div>
        <div className={styles.left} onClick={prev}>
          <Img src={leftArrow} className={styles.imgLeft} />
        </div>
        <div className={styles.right} onClick={next}>
          <Img src={rightArrow} className={styles.imgRight} />
        </div>
      </div>
    )
  }
} 

export default Pagination
