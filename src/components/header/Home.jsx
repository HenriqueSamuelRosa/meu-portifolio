import React from 'react'
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import './Home.css'

export const Home = () => {
  return (
    <main>
     <div className="profile">
      <img src="https://avatars.githubusercontent.com/u/102384857?v=4" alt="foto de perfil" />
      <h1>Henrique Samuel Rosa</h1>
     </div>

     <div className="links">
      <a 
      href="https://github.com/HenriqueSamuelRosa"
      rel="noreferrer"
      target="_blank"
      >
        <div className="link">
          <AiOutlineGithub />
          <span>/HenriqueSamuelRosa</span>
        </div>
      </a>
      <a 
      href="https://www.linkedin.com/in/henriquesrosa/"
      rel="noreferrer"
      target="_blank"
      >
        <div className="link">
          <AiOutlineLinkedin />
          <span>/in/henriquesrosa</span>
        </div>
      </a>
     </div>
    </main>
  )
}


export default Home;