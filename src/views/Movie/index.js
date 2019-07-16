import React from 'react';
import baseURL from 'config/baseURL'
import useFetch from 'hooks/useFetch'

import DataGrid from 'ui-kit/DataGrid'
import Img from 'ui-kit/Img'
import Season from 'ui-kit/Season'

import ArrayMap from 'utils/ArrayMap'
import Conditional from 'utils/Conditional';
import MovieInfo from 'views/MovieInfo'
import pageNotFound from 'assets/404.jpg'

import { grouping } from 'utils'

const MovieView = ({ showId }) => {
  const [data, error] = useFetch(`${baseURL}shows/${showId}?embed=episodes`)

  const { _embedded = {}, ...restData } = data || {}
  const { episodes = [] } = _embedded || {}
  const groupedSeason = grouping(episodes, 'season')

  return (
    <>
      <Conditional if={error}>
        <Img src={pageNotFound} alt="Page not found" />
      </Conditional>
      <Conditional if={!error}>
        <MovieInfo {...restData} />
        <ArrayMap data={Object.keys(groupedSeason)}>
          {season => (
            <Season season={season}>
              <DataGrid data={groupedSeason[season]} onClick={({id}) => () => alert(id)} />
            </Season>
          )}
        </ArrayMap>
      </Conditional> 
    </>
  );
}

export default MovieView;
