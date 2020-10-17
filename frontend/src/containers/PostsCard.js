import React from 'react'
import { connect } from 'react-redux'
import Votes from './Votes'
import { withRouter } from 'react-router-dom'

const PostsCards = (props) => {
    const { currentPost, history } = props

    return(
        <div className='posts-card'>
            <article onClick={() => history.push(`${currentPost.category}/${currentPost.id}`)}>
                <p>{ currentPost.title }</p>
                <p>By: { currentPost.author }</p>
                <p>{ currentPost.commentCount } Comments</p>
            </article>
            <button onClick={() => history.push(`/newPost/${currentPost.category}/${currentPost.id}`)}>Edit</button>
            <Votes id={ currentPost.id }/>
        </div>
    )
}

//grabs the content of the post via id past in via parent, used to display post info
function mapStateToProps({ posts }, { id }) {
    return {
        currentPost: posts[id]
    }
}

export default withRouter(connect(mapStateToProps)(PostsCards))