import React from 'react'
import { connect } from 'react-redux'
import PostsCard from './PostsCard'

const CatContainer = (props) => {
    const { id, postsForCat } = props

    return(
        <div className='cat-container'>
            <h2>{id}</h2>
            <section>
                {postsForCat.length !== 0
                    ? postsForCat.map(post => (
                        <PostsCard key={ post } id={ post } />
                    ))
                    : `No posts currently!`
                }
            </section>
            <button>Add Post</button>
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

export default connect(mapStateToProps)(CatContainer)