import React from 'react'
import { Link } from 'react-router-dom'
import { FofContainer } from '../styles/main'

//simple 404 page when at incorrect url
const FourOFour = () => {
    return(
        <FofContainer>
            <h1>404</h1>
            <h2>Whooopsie!</h2>
            <Link to='/'>To Home</Link>
        </FofContainer>
    )
}

export default FourOFour