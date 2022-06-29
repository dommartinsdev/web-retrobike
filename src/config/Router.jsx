import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from '../views/home/Home'
import About from '../views/about/About'

export default function Router() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </React.Fragment>
    )
}
