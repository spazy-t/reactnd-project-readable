import React from 'react'
import { connect } from 'react-redux'
import CatContainer from './CatContainer'

const CatList = (props) => {
    const { currentCategories } = props

    return(
        <div>
            {currentCategories.map(category => (
                <CatContainer key={ category } id={ category } />
            ))}
        </div>
    )
}

function mapStateToProps({ categories }) {
    return {
        currentCategories: Object.keys(categories).map(category => (
            categories[category].name
        ))
    }
}

export default connect(mapStateToProps)(CatList)