import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "./Navbar/NavbarIndex"
import Footer from './Footer/FooterIndex'

function Layout() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <NavBar />
            <div style={{ width: '100%' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout