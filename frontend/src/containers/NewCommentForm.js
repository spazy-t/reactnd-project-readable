import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleNewComment } from '../actions/shared'
import { generateUID } from '../utils/helpers'
import { CommentForm } from '../styles/main'

const NewCommentForm = (props) => {
    const { handleNewComment, parentId, hideForm = null, editAuthor, editBody, id } = props
    //local state for form to add new comment or edit existing one
    const [author, setAuthor] = useState(editAuthor !== undefined ? editAuthor : '')
    const [body, setBody] = useState(editBody !== undefined ? editBody : '')

    //called when submit btn clicked, creates comment obj to send to db and store
    //if editing existing comment an id is passed in and used to replace current comment data
    const handleSubmit = (evt) => {
        evt.preventDefault()

        //thunk action to access db via helpers
        handleNewComment({
            id: id !== undefined ? id : generateUID(),
            timestamp: Date.now(),
            body,
            author,
            parentId
        }, id !== undefined)
        .then(() => {
            setAuthor('')
            setBody('')

            //make sure callback brought in before calling it to hide form
            if(hideForm !== null) {
                hideForm()
            }
        })
    }

    //display form for comment
    return(
        <CommentForm onSubmit={ handleSubmit }>
            <input
                value={ author }
                onChange={ (evt) => setAuthor(evt.target.value) }
                className='form-input'
                placeholder='Enter author name'
            />
            <textarea
                value={ body }
                onChange={ (evt) => setBody(evt.target.value) }
                className='form-input'
                placeholder='Enter comment body'
            />
            <button
                type='submit'
                disabled={ author === '' || body === '' }
            >
                Submit
            </button>
        </CommentForm>
    )
}

export default connect(null, { handleNewComment })(NewCommentForm)