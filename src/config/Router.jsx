import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from '../views/home/Home'
import About from '../views/about/About'
import Service from '../views/service/Service'
import Store from '../views/store/Store'
import Contact from '../views/contact/Contact'

export default function Router() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/store" element={<Store />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </React.Fragment>
    )
}
