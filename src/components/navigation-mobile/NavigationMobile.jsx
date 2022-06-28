import React from 'react'
import { Link } from 'react-router-dom'

import './NavigationMobile.css'

import ImgBrand from '../../assets/icons/brand.svg'

export default function NavigationMobile() {
  return (
    <React.Fragment>
      <div class="offcanvas offcanvas-end border-0" tabindex="-1" id="mobile" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <Link to="/" class="navbar-brand">
            <img src={ImgBrand} width="175px" />
          </Link>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="navbar-nav ms-auto">
            <Link to="/" class="nav-link">Início</Link>
            <Link to="/about" class="nav-link">Sobre nós</Link>
            <Link to="/service" class="nav-link">Serviços</Link>
            <Link to="/store" class="nav-link">Loja</Link>
            <Link to="/contact" class="nav-link">Contato</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
