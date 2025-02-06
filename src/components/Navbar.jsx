import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";


import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  
 
  
  

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <>
    
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700  "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 pl-0 ">
          {/* Logo and Product button */}
          <NavLink to="/" className="flex items-center gap-7">
            <img src="/img/ananta_logo.png" width={180} height={100} alt="logo" className="" />

            
          </NavLink>

          {/* Hamburger Menu Button (for mobile) */}
        <div className="md:hidden float-right">
          <button
            onClick={toggleMenu}
            className="text-white pl-14 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (collapsible) */}
      {isOpen && (
        <div className="md:hidden mt-44  flex flex-col ">
          
          <NavLink to="about" onClick={closeMenu} className="block nav-hover-btn text-white py-2 hover:bg-gray-700">About</NavLink>
          <NavLink to="events" onClick={closeMenu} className="block nav-hover-btn text-white py-2 hover:bg-gray-700">Events</NavLink> 
          <a href="#" onClick={closeMenu} className="block nav-hover-btn text-white py-2 hover:bg-gray-700">Register</a>
          <NavLink to="gallery" onClick={closeMenu} className="block nav-hover-btn text-white py-2 hover:bg-gray-700">Gallery</NavLink>
        </div>
      )}

          
          <div className="flex flex-wrap h-full items-center">
            <div className="hidden md:flex">
              
                <NavLink
                  to="about"
                  
                  
                  className="nav-hover-btn"
                >
                  About
                </NavLink>
                
                <NavLink
                  
                  to="events"
                  className="nav-hover-btn"
                >
                  Events
                </NavLink>
                <a
                  
                  href="/"
                  className="nav-hover-btn"
                >
                  Register
                </a>
                <NavLink
               
                  to="team"
                  className="nav-hover-btn"
                >
                  Team
                </NavLink>
                
                <NavLink
                  
                  to="gallery"
                  className="nav-hover-btn"
                >
                  Gallery
                </NavLink>
              
            </div>

            
            
            
          </div>
        </nav>

      </header>
    </div>
    </>
  );
};

export default Navbar;
