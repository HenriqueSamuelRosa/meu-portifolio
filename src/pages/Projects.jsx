import React from 'react'
import { Link } from 'react-router-dom';
import ListProjects from '../components/listProjects/ListProjects';
import './styles/Projects.css'

function Projects() {
  return (
    <>
      <div className='projects'>
        <ListProjects />
      </div>
      
      <img
      id='in-const' 
      src="https://www.radcorp.com.br/site/assets/images/construcao-1000x750.png" alt="Em Construção" />
      <Link to='/'>Return to Home</Link>
    </>
  )
}

export default Projects;