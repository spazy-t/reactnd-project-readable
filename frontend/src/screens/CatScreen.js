import React from 'react'
import { useParams } from 'react-router-dom'
import CatContainer from '../containers/CatContainer'
import { IndieCat } from '../styles/main'

//simple screen to show one category when category header clicked in root view
const CatScreen = () => {
    //hook to grab category param from url and pass into category container to show correct category
    const { category } = useParams()

    return(
        <IndieCat>
            <CatContainer id={ category } />
        </IndieCat>
    )
}

export default CatScreen