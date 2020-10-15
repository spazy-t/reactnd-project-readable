import React from 'react'

const CommentCard = (props) => {
    const { author, body, id} = props.data

    return(
        <div className='comment-container'>
            <p>{author}</p>
            <p>{body}</p>
        </div>
    )
}

export default CommentCard