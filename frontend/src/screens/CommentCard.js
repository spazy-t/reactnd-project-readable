import React, { Fragment, useState } from 'react'
import Votes from '../containers/Votes'
import NewCommentForm from '../containers/NewCommentForm'
import { connect } from 'react-redux'
import { handleDeleteComment } from '../actions/shared'

const CommentCard = (props) => {
    const { author, body, id, parentId } = props
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
                    <button onClick={() => props.dispatch(handleDeleteComment(id, parentId)) }>Delete</button>
                </Fragment>
            }
        </div>
    )
}

function mapStateToProps({ comments }, { id }) {
    return {
        body: comments[id].body,
        author: comments[id].author,
        parentId: comments[id].parentId
    }
}

export default connect(mapStateToProps)(CommentCard)