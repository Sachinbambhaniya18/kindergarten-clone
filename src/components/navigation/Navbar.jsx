import React, { createContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import PageRoutes from './PageRoutes';
import { navPaths, pagePaths } from '../static-data/PagePaths';
import { heading } from '../static-data/heading-data';
import MobileNav from './MobileNav';
import { motion as m } from 'framer-motion';


export const HeadDataContext = createContext()

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNavOpen = () => {
    setIsNavOpen(true)
    
    document.body.classList.add('Scroll-lock')

  }
  const handleNavClose = () => {
    setIsNavOpen(false)
    document.body.classList.remove('Scroll-lock')
  }

  return (
    <header className='Main-Header'>
      <nav className="Container">
        <div className="Wrapper">
          <div className="Logo">
            <h1>Kindergarden</h1>
          </div>
          <div className="Paths">
            <ul>
              {
                navPaths.map((navPage) => {
                  return (
                    <li className={({ isActive }) => (isActive ? 'active' : null)}>
                      <NavLink to={navPage.path} >{navPage.name}</NavLink>
                    </li>
                  )
                })
              }
              <li className="Page">
                <Link to='#' className='path'>Pages</Link>
                <ul className='dropdown'>
                  {
                    pagePaths.map((page) => {
                      return (
                        <li>
                          <NavLink to={page.path} className={({ isActive }) => (isActive ? 'Active-d' : null)}>{page.name}</NavLink>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            </ul>
          </div>
          <div className='Contact-Info'>
            <span>
              <FontAwesomeIcon icon={faWhatsapp} />
              <span className='Whatsapp-number'>
                +1 234 567 8910
              </span>
            </span>
          </div>
          <div className="Mobile-nav">
            <div className="Mobile-menu" onClick={handleNavOpen}>
              <span></span>
            </div>
            {
              isNavOpen && <MobileNav onClose={handleNavClose}/>
            }
            {
              isNavOpen && (
                <m.div className="exit-btn"
                  onClick={handleNavClose}
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1, transition: {
                      duration: 0.3,
                      delay: 0.2
                    }
                  }}
                  exit={{ scale: 0 }}
                >
                  <FontAwesomeIcon icon={faClose} size='xl' color='#ffab4a' />
                </m.div>
              )
            }
          </div>

        </div>
        <HeadDataContext.Provider value={{ heading: heading }}>
            <PageRoutes />
        </HeadDataContext.Provider>
      </nav>
    </header>
  )
}

export default Navbar;