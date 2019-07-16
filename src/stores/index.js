import React, { createContext, useReducer } from 'react';
import useLocalStorage from 'hooks/useLocalStorage'
import { ADD_MOVIE, DELETE_MOVIE } from 'config/constants'

const Store = createContext();

const initialState = {
  likes: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        likes: [...state.likes, action.payload]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        likes: state.likes.filter(x => x.id !== action.payload)
      };
    default:
      return state;
  }
}

const StoreProvider = (props) => {
  const [localStorage] = useLocalStorage('data', initialState)
  const [state, dispatch] = useReducer(reducer, localStorage);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

export {
  Store,
  StoreProvider
}