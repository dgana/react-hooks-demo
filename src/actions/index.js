import { ADD_MOVIE, DELETE_MOVIE } from 'config/constants'

const saveMovieAction = (dispatch, payload) => {
  return dispatch({
    type: ADD_MOVIE,
    payload
  });
};

const deleteActionMovie = (dispatch, payload) => {
  return dispatch({
    type: DELETE_MOVIE,
    payload
  })
}

export {
  saveMovieAction,
  deleteActionMovie
}