import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { StyledNav } from '../styles/main'

const Nav = () => {

     return(
        <StyledNav>
            <NavLink className='nav-btn'
                activeClassName='nav-active'
                exact to='/'>
                Home
            </NavLink>
        </StyledNav>
    )
}

export default withRouter(Nav)