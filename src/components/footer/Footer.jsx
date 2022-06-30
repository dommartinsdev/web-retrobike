import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
import IconBrandFooter from '../../assets/icons/brand.svg'
import IconReact from '../../assets/icons/icon-react.svg'
import IconLinkedin from '../../assets/icons/icon-linkedin.svg';

export default function Footer() {
  return (
    <React.Fragment>
      <footer class="rt-footer">
        <div class="container py-4">
          <div class="row align-items-center">
            <div class="col-lg-2 m-0 text-center">
              <img src={IconBrandFooter} alt="" width="200px" />
            </div>
            <div class="col-lg-8">
              <div class="nav justify-content-center">
                <li class="nav-item">
                  <Link to="/" class="nav-link">Início</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link">Sobre nós</Link>
                </li>
                <li class="nav-item">
                  <Link to="/service" class="nav-link">Serviços</Link>
                </li>
                <li class="nav-item">
                  <Link to="/store" class="nav-link">Loja</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link">Contato</Link>
                </li>
              </div>
            </div>
            <div class="col-lg-2 text-center rt-user">
              <a href="https://pt-br.reactjs.org/">
                <img src={IconReact} alt="" width="25px" />
              </a>
              <a href="https://www.linkedin.com/in/jesse-martins/" alt="">
                <img src={IconLinkedin} alt="" width="25px" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}
