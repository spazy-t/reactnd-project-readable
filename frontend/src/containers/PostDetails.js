import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { handlePostDelete } from '../actions/posts'

/**
 * components
 */
import Votes from './Votes'
import CommentCard from './CommentCard'
import NewCommentForm from './NewCommentForm'
import FourOFour from '../screens/FourOFour'
import {
    StyledPostDetails,
    CommentList,
    AddCommentBtn,
    BtnHolder
} from '../styles/main'

const PostDetails = (props) => {
    const { currentPost, postCommentsIds, history, handlePostDelete } = props
    //global to contain date object to show formatted date in display
    let dateObj = ''

    //hooks
    const { post_id } = useParams()
    //local state to show / hide form
    const [showForm, setShowForm] = useState(false)

    //callback to send to NewCommentForm to hide form when comment added
    const hideForm = () => {
        setShowForm(false)
    }

    //called when delete is clicked, deletes post from sever and store then redirects to home page
    const handleDelete = () => {
        let deletePost = window.confirm('Delete Post?')

        if(deletePost) {
            handlePostDelete(post_id)
            history.goBack()
        }
    }

    //if user has navigated to non existent post show 404 page, else formatt date to use in display
    if(currentPost === undefined) {
        return <FourOFour />
    } else {
        dateObj = new Date(currentPost.timestamp)
        dateObj = `${dateObj.getDay()} / ${dateObj.getMonth()} / ${dateObj.getFullYear()}`
    }
 
    return(
        <StyledPostDetails>
            <article>
                <h1>{ currentPost.title }</h1>
                <h2>{ `By: ${currentPost.author}` }</h2>
                <h3>{ dateObj.toString() }</h3>
                <h3>{ `${currentPost.commentCount} Comments` }</h3>
                <p>{ currentPost.body }</p>
                <BtnHolder>
                    <button onClick={ () => history.push(`/newpost/${currentPost.category}/${post_id}`) }>Edit</button>
                    <button onClick={ handleDelete }>Delete</button>
                </BtnHolder>
                <Votes id={ post_id } />
            </article>
            <CommentList>
                { postCommentsIds.map(comment => (
                    <CommentCard key={ comment.id } id={ comment.id } />
                ))}
                { showForm
                ? <NewCommentForm parentId={ post_id } hideForm={ hideForm } />
                : <AddCommentBtn
                    onClick={ () => setShowForm(true) }>
                        Add Comment
                    </AddCommentBtn>
                }
            </CommentList>
        </StyledPostDetails>
    )
}

function mapStateToProps({ posts, comments }, route) {
    const { post_id } = route.match.params
    //grabs the comments from state and filters out the ones that have a parentId that matches the post id.
    return {
        currentPost: posts[post_id],
        postCommentsIds: Object.values(comments).filter(comment => comment.parentId === post_id)
    }
}

export default connect(mapStateToProps, { handlePostDelete })(PostDetails)