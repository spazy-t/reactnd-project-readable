import React from 'react'
import Votes from '../containers/Votes'

const CommentCard = (props) => {
    const { author, body, id} = props.data

    return(
        <div className='comment-container'>
            <p>{author}</p>
            <p>{body}</p>
            <Votes id={id} commentTrue={true} />
        </div>
    )
}

export default CommentCard