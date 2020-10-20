import React, { Fragment, useState } from 'react'
import Votes from './Votes'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import { handleDeleteComment } from '../actions/shared'
import { CommentContainer } from '../styles/main'

const CommentCard = (props) => {
    const { author, body, id, parentId, handleDeleteComment } = props
    //determine wether to show edit form or not
    const [edit, setEdit] = useState(false)

    //called when submit btn in new cooment form clicked, sets local state so form is hidden
    const reHideForm = () => {
        setEdit(false)
    }

    //show dialogue to confirm deletion of comment
    const handleDeletion = () => {
        let deleteComment = window.confirm('Delete Comment?')

        if(deleteComment) {
            handleDeleteComment(id, parentId)
        }
    }

    //if edit is false show the comment data and edit button, if true show only the form to edit the comment
    return(
        <CommentContainer>
            {edit ? <NewCommentForm id={id} editBody={body} editAuthor={author} hideForm={reHideForm} />
                : <Fragment>
                    <p>{author}</p>
                    <p>{body}</p>
                    <Votes id={id} commentTrue={true} />
                    <button onClick={() => setEdit(true)}>Edit</button>
                    <button onClick={ handleDeletion }>Delete</button>
                </Fragment>
            }
        </CommentContainer>
    )
}

function mapStateToProps({ comments }, { id }) {
    return {
        body: comments[id].body,
        author: comments[id].author,
        parentId: comments[id].parentId
    }
}

export default connect(mapStateToProps, { handleDeleteComment })(CommentCard)