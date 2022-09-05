import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">Meu Portifólio</h1>
        <div className="header-links">
          <Link className="btn btn-primary" to="/about">Sobre Mim</Link>
          <Link className="btn btn-primary" to="/projects">Projetos</Link>
          <Link className="btn btn-primary" to= "/contacts">Contatos</Link>
        </div>
      </header>
    )
  }
}
