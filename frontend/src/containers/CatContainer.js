import React from 'react'
import { connect } from 'react-redux'
import PostsCard from './PostsCard'
import { withRouter, Link, useParams, Redirect } from 'react-router-dom'
import FourOFour from '../screens/FourOFour'

const CatContainer = (props) => {
    const { id, postsForCat, history, categories } = props
    //grabs parameter on url if there, if so then we are in individual category screen
    const { category }  = useParams()

    //TODO: find was of testing the categories length as an obj not array, as as an array it'll only take an index number not a named parameter
    if(category !== undefined && Object.keys(categories).length !== 0 && categories[category] === undefined) {
        return <FourOFour />
    }

    //determine if we are on the individual category view or main list view
    //if individual view disable the link
    return(
        <div className='cat-container'>
            {category !== id
                ? <Link to={`/${id}`}>
                    <h2>{id}</h2>
                </Link>
                : <h2>{id}</h2>
            }
            
            <section>
                {postsForCat.length !== 0
                    ? postsForCat.map(post => (
                        <PostsCard key={ post } id={ post } />
                    ))
                    : `No posts currently!`
                }
            </section>
            <button onClick={() => history.push(`/newPost/${id}`)}>Add Post</button>
        </div>
    )
}

//TODO: for categories bring in the object from state, not an array
//filters out the posts that have the same category as for this container, then grabs it's id to pass to PostCard component
function mapStateToProps({ posts, categories }, { id }) {
    return {
        categories: categories,
        postsForCat: Object.keys(posts).filter(post => posts[post].category === id)
            .map(catPost => (
                posts[catPost].id
            ))
    }
}

export default withRouter(connect(mapStateToProps)(CatContainer))