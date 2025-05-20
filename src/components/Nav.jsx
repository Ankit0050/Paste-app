import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex flex-row gap-8 place-content-evenly'>
        <NavLink to="/">Home</NavLink>
    
        <NavLink  to="/pastes">Pastes</NavLink>
    </div>
  )
}

export default Nav
