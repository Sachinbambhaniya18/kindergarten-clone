import React from 'react'
import { pagePaths } from './PagePaths';
import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion';
const NavDropdown = () => {
    return (
        <m.div 
        className="Page-parent"
        initial={{translateX: '-25px', opacity: 0}}
        animate={{translateX: '-15px', opacity: 1}}
        exit={{translateX: '-25px', opacity: 0}}
        transition={{duration: '0.5'}}>
            <div className='Page-child'>
                <div className='Child-pages'>
                    {
                        pagePaths.map((page) => {
                            return (
                                <span>
                                    <NavLink to={page.path} className={({ isActive }) => (isActive ? 'Active-d' : null)}>{page.name}</NavLink>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </m.div>
    )
}

export default NavDropdown