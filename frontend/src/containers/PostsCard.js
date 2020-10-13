import React from 'react'
import { connect } from 'react-redux'
import Votes from './Votes'

const PostsCards = (props) => {
    const { currentPost } = props

    return(
        <div className='posts-card'>
            <article>
                <p>{ currentPost.title }</p>
                <p>By: { currentPost.author }</p>
                <p>{ currentPost.commentCount } Comments</p>
            </article>
            <Votes id={ currentPost.id }/>
        </div>
    )
}

//grabs the content of the post via id past in via parent, used to display post info
function mapStateToProps({ posts }, { id }) {
    return {
        currentPost: Object.values(posts).filter(post => post.id === id)[0]
    }
}

export default connect(mapStateToProps)(PostsCards)