import React, { useContext } from 'react'

import { Store } from 'stores'
import { saveMovieAction, deleteActionMovie } from 'actions'
import useDispatcher from 'hooks/useDispatcher'

import like from 'assets/like.png'
import liked from 'assets/liked.svg'

import Img from 'ui-kit/Img'
import FlexBox from 'ui-kit/FlexBox'
import Grid from 'ui-kit/Grid'
import { H1 } from 'ui-kit/Heading'

import { getImage } from 'utils'
import ArrayMap from 'utils/ArrayMap'

import styles from './MovieInfo.module.css'
import star from 'assets/star.png'

const MovieInfo = ({
  genres = [],
  officialSite,
  premiered,
  rating = {},
  summary,
  image,
  name,
  id
}) => {
  const { state = {} } = useContext(Store) 
  const { likes = [] } = state || {}
  const isLiked = !!likes.find((x = {}) => x.id === id)

  const delPayload = id
  const addPayload = { id, name, image }

  const addDispatcher = useDispatcher(saveMovieAction, addPayload, 'likes')
  const delDispatcher = useDispatcher(deleteActionMovie, delPayload, 'likes')
  
  return (
    <Grid column="26rem 1fr">
      <div>
        <a href={officialSite} target="_blank" rel="noopener noreferrer">
          <Img src={getImage(image)} alt="show" className={styles.image} />
        </a>
      </div>
      <div className={styles.relative}>
        <FlexBox justify="space-between" align='center'>
          <H1 className={styles.h1}>
            {name}
            <Img src={star} alt="star" className={styles.star} />
            <span>{rating.average}</span>
          </H1>
          <span className={styles.premiered}>{premiered}</span>
        </FlexBox>
        <hr className={styles.hr} />
        <p dangerouslySetInnerHTML={{__html: summary}} className={styles.p}></p>
        <ul className={styles.ul}>
          <ArrayMap data={genres}>
            {x => <li>{x}</li>}
          </ArrayMap>
        </ul>
        <Img src={isLiked ? liked : like} onClick={isLiked ? delDispatcher : addDispatcher} alt="like" className={styles.like} />
      </div>
    </Grid>
  )
}

export default MovieInfo
