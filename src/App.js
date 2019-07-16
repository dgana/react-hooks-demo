import React from 'react'
import { Router, Location } from "@reach/router"

import HomePage from 'pages/HomePage'
import MoviePage from 'pages/MoviePage'
import LikePage from 'pages/LikePage';

import Img from 'ui-kit/Img'
import Header from 'views/Header'
import Content from 'views/Content'
import logo from 'logo.svg';

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Location>
        {({location}) => <Header location={location} />}
      </Location>
      <Content>
        <Router>
          <HomePage path="/" />
          <MoviePage path="/show/:showId" />
          <LikePage path="/save" />
        </Router>
      </Content>
      <Img src={logo} className='appLogo' alt="logo" />
    </div>
    
  )
}

export default App
