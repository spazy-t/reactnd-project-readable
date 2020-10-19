import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

/**
 * components
 */
import Votes from './Votes'
import CommentCard from '../screens/CommentCard'
import NewCommentForm from './NewCommentForm'

const PostDetails = (props) => {
    const { currentPost, postCommentsIds, history } = props

    //hooks
    const { post_id } = useParams()
    const [showForm, setShowForm] = useState(false)

    //callback to send to NewCommentForm to hide form when comment added
    const hideForm = () => {
        setShowForm(false)
    }

    return(
        <div className='post-details'>
            { currentPost !== undefined &&(
                <Fragment>
                    <button onClick={() => history.push(`/newPost/${currentPost.category}/${post_id}`)}>Edit</button>
                    <article>
                        <h1>{currentPost.title}</h1>
                        <h2>{`By: ${currentPost.author}`}</h2>
                        <h3>{currentPost.timestamp}</h3>
                        <h3>{`${currentPost.commentCount} Comments`}</h3>
                        <p>{currentPost.body}</p>
                    </article>
                    <Votes id={post_id} />
                    <div className='comment-list'>
                        { postCommentsIds.map(comment => (
                            <CommentCard key={comment.id} id={comment.id} />
                        ))}
                    </div>
                    { showForm
                        ? <NewCommentForm parentId={post_id} hideForm={hideForm} />
                        : <button
                            className='add-comment-btn'
                            onClick={() => setShowForm(true)}>
                                Add Comment
                        </button>
                    }
                </Fragment>
            )}
        </div>
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

export default connect(mapStateToProps)(PostDetails)