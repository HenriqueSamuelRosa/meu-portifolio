import React from 'react'
import './Tecnologies.css'

import { VscTerminalLinux } from "react-icons/vsc";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa"
import { SiReactrouter, SiRedux } from "react-icons/si"

function Tecnologies() {
  return (
    <section className='tecnologies'>
      <div>
        <VscTerminalLinux/>
        <FaGitAlt />
        <FaGithub />
        <FaHtml5 />
        <FaCss3Alt />
        <FaJsSquare />
        <FaReact />
        <SiRedux />
        <SiReactrouter />
      </div>
    </section>
  )
}

export default Tecnologies;