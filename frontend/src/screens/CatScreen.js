import React from 'react'
import { useParams } from 'react-router-dom'
import CatContainer from '../containers/CatContainer'

const CatScreen = () => {
    const { category } = useParams()

    return(
        <div>
            <CatContainer id={ category } />
        </div>
    )
}

export default CatScreen