import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PageRoutes from './PageRoutes';
import { pagePaths, navPaths } from '../PagePaths';
const Navbar = () => {
  
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
                navPaths.map((navPage)=>{
                  return (
                    <li>
                      <NavLink to={navPage.path} className={({isActive})=>(isActive ? 'active' : null)}>{navPage.name}</NavLink>
                    </li>
                  )
                })
              }
              <li>
                <div className="Page-parent">
                  <NavLink to="/pages" className="Page">Pages</NavLink>
                  <div className='Page-child'>
                    <ul className='Child-pages'>
                      {
                        pagePaths.map((page) => {
                          return (
                            <li>
                              <NavLink to={page.path} className={({isActive})=>( isActive ? 'active-d' : null)}>{page.name}</NavLink>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
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
        </div>
      </nav>
      <PageRoutes />
    </div>
  )
}

export default Navbar;