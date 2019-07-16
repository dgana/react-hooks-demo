import React from 'react'
import PropTypes from 'prop-types'

import ArrayMap from 'utils/ArrayMap'
import Card from 'ui-kit/Card'
import Img from 'ui-kit/Img'
import { H2 } from 'ui-kit/Heading'
import useWindowWidth from 'hooks/useWindowWidth'
import  { getImage } from 'utils'
import { EPISODE } from 'config/constants'

import styles from './DataGrid.module.css'

const Grid = ({ data, type, onClick }) => {
  const width = useWindowWidth()

  const getImageClassName = {
    SHOW: styles.show,
    EPISODE: styles.episode
  }

  let size = styles.large

  if (width < 1650 && width > 1200) {
    size = styles.medium
  }

  if (width <= 1200) {
    size = styles.small
  }

  const cn = `${styles.gridContainer} ${size}`

  return (
    <div className={cn}>
      <ArrayMap data={data}>
        {({ name, image = {}, id, number }) => (
          <Card onClick={onClick({ id, number })}>
            <H2 className={styles.h2}>{name}</H2>
            <Img src={getImage(image)} className={getImageClassName[type]} alt="episode" />
          </Card>
        )}
      </ArrayMap>
    </div>
  )
}

Grid.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}

Grid.defaultProps = {
  type: EPISODE,
  onClick: () => {}
}

export default Grid
