import React from 'react'
import styles from './Season.module.css'
import { H1 } from 'ui-kit/Heading'

const ShowSeason = ({ children, season }) => {
  return (
    <>
      <H1 className={styles.h1}>Season {season}</H1>
      <hr className={styles.border} />
      {children}
    </>
  )
}

export default ShowSeason
