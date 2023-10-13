import React, { useState, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import PageRoutes from './PageRoutes';
import { navPaths } from '../static-data/PagePaths';
import NavDropdown from '../NavDropdown';
import { heading } from '../static-data/heading-data'

export const HeadDataContext = createContext()

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
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
                <button onClick={handleDropdown} className={isDropdownOpen ? 'Active-btn' : ''}>
                  Pages
                </button>
                <FontAwesomeIcon icon={faCaretUp} className={`caret ${isDropdownOpen ? 'caret-dynamic' : ''}`} />
              </li>
              {
                isDropdownOpen && <NavDropdown onClose={handleDropdown} />
              }

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
        </div>
        <HeadDataContext.Provider value={{heading: heading}}>
          <PageRoutes />
        </HeadDataContext.Provider>
      </nav>
    </header>
  )
}

export default Navbar;