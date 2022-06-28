import React from 'react'

import './Footer.css'

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="rt-footer py-5">
        <div className="container text-center">
          <p>Retrobike | Todos os direitos reservados {new Date().getFullYear()}</p>
          <p>Desenvolvido por <a href="https://www.linkedin.com/in/jesse-martins/">Jessé Martins</a></p>
        </div>
      </footer>
    </React.Fragment>
  )
}
