import React, { Fragment, useState } from 'react'
import Votes from '../containers/Votes'
import NewCommentForm from '../containers/NewCommentForm'

const CommentCard = (props) => {
    const { author, body, id} = props.data
    //determine wether to show edit form or not
    const [edit, setEdit] = useState(false)

    const reHideForm = () => {
        setEdit(false)
    }

    //if edit is false show the comment data and edit button, if true show only the form to edit the comment
    return(
        <div className='comment-container'>
            {edit ? <NewCommentForm id={id} editBody={body} editAuthor={author} hideForm={reHideForm} />
                : <Fragment>
                    <p>{author}</p>
                    <p>{body}</p>
                    <Votes id={id} commentTrue={true} />
                    <button onClick={() => setEdit(true)}>Edit</button>
                </Fragment>
            }
        </div>
    )
}

export default CommentCard