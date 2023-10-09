import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import PageRoutes from './PageRoutes';
import { navPaths } from '../PagePaths';
import NavDropdown from '../NavDropdown';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const handleDropdown = () =>{
      setIsDropdownOpen(!isDropdownOpen)
    }
  return (
    <div>
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
                  <FontAwesomeIcon icon={faCaretUp} className={`caret ${isDropdownOpen ? 'caret-dynamic' : ''}`}/>
              </li>
              {
                isDropdownOpen && <NavDropdown />
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
      </nav>
      <PageRoutes />
    </div>
  )
}

export default Navbar;