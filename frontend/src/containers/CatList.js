import React from 'react'
import { connect } from 'react-redux'
import CatContainer from './CatContainer'

//default screen, displays each category and passes through the id to list out the relevant posts for each
const CatList = (props) => {
    const { currentCategories } = props

    return(
        <div className='cat-list'>
            {currentCategories.map(category => (
                <CatContainer key={ category } id={ category } />
            ))}
        </div>
    )
}

//grabs all the category names from state to iterate over and pass to a Category container each
function mapStateToProps({ categories }) {
    return {
        currentCategories: Object.keys(categories).map(category => (
            categories[category].name
        ))
    }
}

export default connect(mapStateToProps)(CatList)