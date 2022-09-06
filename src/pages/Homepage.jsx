import React, { Component } from 'react'
import Header from '../components/header/Header'
import Home from '../components/Home/Home'
import Tecnologies from '../components/Tecnologies/Tecnologies'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home />
        <Tecnologies />
      </div>
    )
  }
}

export default Homepage
