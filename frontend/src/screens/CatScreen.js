import React from 'react'
import { useParams } from 'react-router-dom'
import CatContainer from '../containers/CatContainer'

const CatScreen = () => {
    const { cat_id } = useParams()

    return(
        <div>
            <CatContainer id={ cat_id } />
        </div>
    )
}

export default CatScreen