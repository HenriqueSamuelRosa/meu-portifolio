import React, { Component } from 'react'
import Header from '../components/header/Header'
import Home from '../components/header/Home'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home />
      </div>
    )
  }
}

export default Homepage
