import React, { createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import PageRoutes from './PageRoutes';
import { navPaths, pagePaths } from '../static-data/PagePaths';
import { heading } from '../static-data/heading-data';

export const HeadDataContext = createContext()

const Navbar = () => {
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

          <div className="Mobile-menu">
            <span></span>
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