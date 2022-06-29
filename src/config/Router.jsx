import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from '../views/home/Home'
import About from '../views/about/About'
import Service from '../views/service/Service'

export default function Router() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
            </Routes>
        </React.Fragment>
    )
}
