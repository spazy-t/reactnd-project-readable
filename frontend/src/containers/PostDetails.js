import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import CommentCard from '../screens/CommentCard'
import Votes from './Votes'
import { useParams } from 'react-router-dom'

const PostDetails = (props) => {
    const { currentPost, postCommentsIds } = props
    const { post_id } = useParams()

    return(
        <div className='post-details'>
            { currentPost !== undefined &&(
                <Fragment>
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
                            <CommentCard key={comment.id} data={comment} />
                        ))}
                    </div>
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