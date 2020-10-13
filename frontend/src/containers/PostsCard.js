import React from 'react'
import { connect } from 'react-redux'

const PostsCards = (props) => {
    const { currentPost } = props

    return(
        <div className='posts-card'>
            {currentPost.map(post => (
                <article key={ post.id }>
                    <p>{ post.title }</p>
                    <p>By: { post.author }</p>
                    <p>{ post.commentCount } Comments</p>
                </article>
            ))}
        </div>
    )
}

//grabs the content of the post via id past in via parent, used to display post info
function mapStateToProps({ posts }, { id }) {
    return {
        currentPost: Object.values(posts).filter(post => post.id === id)
    }
}

export default connect(mapStateToProps)(PostsCards)