import React from 'react'
import { connect } from 'react-redux'
import Votes from './Votes'
import { withRouter } from 'react-router-dom'
import { handlePostDelete } from '../actions/posts'
import { PostsCard } from '../styles/main'

const PostsCards = (props) => {
    const { currentPost, history, handlePostDelete } = props

    //shows dialogue to confirm deletion of post
    const handleDelete = () => {
        let deletePost = window.confirm('Delete Post?')

        if(deletePost) {
            handlePostDelete(currentPost.id)
        }
    }

    return(
        <PostsCard>
            <article onClick={() => history.push(`${currentPost.category}/${currentPost.id}`)}>
                <p>{ currentPost.title }</p>
                <p>By: { currentPost.author }</p>
                <p>{ currentPost.commentCount } Comments</p>
            </article>
            <button onClick={() => history.push(`/newPost/${currentPost.category}/${currentPost.id}`)}>Edit</button>
            <button onClick={ handleDelete }>Delete</button>
            <Votes id={ currentPost.id }/>
        </PostsCard>
    )
}

//grabs the content of the post via id past in via parent, used to display post info
function mapStateToProps({ posts }, { id }) {
    return {
        currentPost: posts[id]
    }
}

export default withRouter(connect(mapStateToProps, { handlePostDelete })(PostsCards))