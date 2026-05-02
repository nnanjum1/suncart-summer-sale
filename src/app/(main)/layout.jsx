import React from 'react'
import NavBar from '../component/shared/NavBar'
import Footer from '../component/shared/Footer'
import Hero from '../component/Hero'
import "animate.css";
const MainLayout = ({ children }) => {
    return (
        <div>

            <NavBar />

            {children}
            <Footer />
        </div>
    )
}

export default MainLayout