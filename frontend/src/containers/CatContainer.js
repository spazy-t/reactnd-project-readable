import React from 'react'
import { connect } from 'react-redux'
import PostsCard from './PostsCard'
import { withRouter, Link, useParams } from 'react-router-dom'

const CatContainer = (props) => {
    const { id, postsForCat, history } = props
    //grabs parameter on url if there, if so then we are in individual category screen
    const { category }  = useParams()

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

//filters out the posts that have the same category as for this container, then grabs it's id to pass to PostCard component
function mapStateToProps({ posts }, { id }) {
    return {
        postsForCat: Object.keys(posts).filter(post => posts[post].category === id)
            .map(catPost => (
                posts[catPost].id
            ))
    }
}

export default withRouter(connect(mapStateToProps)(CatContainer))