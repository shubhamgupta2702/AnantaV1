import React from "react";
import {Outlet} from 'react-router-dom'
import NavBar from "./components/Navbar.jsx";



function Layout(){
    return(
        <>
        <NavBar/>
        <Outlet/>
        
        
        
        </>
    )
}
export default Layout