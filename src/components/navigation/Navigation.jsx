import React from 'react'
import { Link } from 'react-router-dom'

import ImgBrand from '../../assets/icons/brand.svg'
import IconMenu from '../../assets/icons/icon-menu.svg'

import './Navigation.css'

import NavigationMobile from '../navigation-mobile/NavigationMobile'

export default function Navigation() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div class="container">
          <Link to="/" class="navbar-brand">
            <img src={ImgBrand} width="200px" alt=""/>
          </Link>
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile" aria-controls="offcanvasRight">
            <img src={IconMenu} alt=""/>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link to="/" class="nav-link">Início</Link>
              <Link to="/about" class="nav-link">Sobre nós</Link>
              <Link to="/service" class="nav-link">Serviços</Link>
              <Link to="/store" class="nav-link">Loja</Link>
              <Link to="/contact" class="nav-link">Contato</Link>
            </div>
          </div>
        </div>
      </nav>
      <NavigationMobile />
    </React.Fragment>
  )
}
