import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Contact: React.FC = () => {
  return (
    <div className="content">
      <h1>Contacto</h1>
      <p>¡Conéctate conmigo en GitHub!</p>

      <a
        href="https://github.com/wShuu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
        wShuu
      </a>
    </div>
  )
}

export default Contact
