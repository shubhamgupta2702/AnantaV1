import React from "react";
import {Outlet} from 'react-router-dom'
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function Layout(){
    return(
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}
export default Layout