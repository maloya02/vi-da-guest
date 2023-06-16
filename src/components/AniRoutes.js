import React from 'react'
import Home from "../pages/Home"
import Service from "../pages/Service"
import Contact from "../pages/Contact"
import About from "../pages/About"
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

const AniRoutes = () => {
    const location = useLocation();
    return (

        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/service/:id" element={<Service />}></Route>
                <Route path="/contact/:id" element={<Contact />}></Route>
                <Route path="/about/:id" element={<About />}></Route>
            </Routes>
        </AnimatePresence>

    )
}

export default AniRoutes