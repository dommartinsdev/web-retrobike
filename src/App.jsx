import React from 'react'
import Router from './config/Router'
import { BrowserRouter } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  )
}
