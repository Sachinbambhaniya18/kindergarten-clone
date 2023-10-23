import React from 'react'
import { navPaths, pagePaths } from '../static-data/PagePaths'
import { NavLink, Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

const MobileNav = ({ onClose }) => {
    return (
        <m.ul className='Mob-options'
        initial={{translateX: '100%'}}
        animate={{translateX: 0, transition: {
            duration: 0.2
        }}}
        exit={{translateX: '-100%'}}
        >
            {
                navPaths.map((navPage) => {
                    return (
                        <li className={({ isActive }) => (isActive ? 'Active-d' : null)}>
                            <NavLink to={navPage.path} onClick={onClose}>{navPage.name}</NavLink>
                        </li>
                    )
                })
            }
            <li className={`Page ${({ isActive }) => (isActive ? 'Active-d' : null)}`}>
                <Link to='/' >Pages</Link>
                <ul className='dropdown mobile-dropdown'>

                    {
                        pagePaths.map((page) => {
                            return (
                                <li>
                                    <NavLink to={page.path} onClick={onClose} className={({ isActive }) => (isActive ? 'Active-d' : null)}>{page.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        </m.ul>
    )
}

export default MobileNav