import React from 'react'
import {
    NavLink,
    withRouter
} from 'react-router-dom'
import { StyledNav } from '../styles/main'

//simple nav to return user to home screen
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

//to use in possible later addition to nav (go back)
export default withRouter(Nav)