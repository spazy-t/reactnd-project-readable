import React from 'react'
import { useParams } from 'react-router-dom'
import CatContainer from '../containers/CatContainer'
import { IndieCat } from '../styles/main'

const CatScreen = () => {
    const { category } = useParams()

    return(
        <IndieCat>
            <CatContainer id={ category } />
        </IndieCat>
    )
}

export default CatScreen