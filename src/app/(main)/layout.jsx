import React from 'react'
import NavBar from '../component/shared/NavBar'
import Footer from '../component/shared/Footer'
import Hero from '../component/Hero'
import "animate.css";
import { Toaster } from 'react-hot-toast';
const MainLayout = ({ children }) => {
    return (
        <div>

            <NavBar />

            {children}

            <Footer />
            <Toaster position="top-right" />

        </div>
    )
}

export default MainLayout