import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleNewComment } from '../actions/shared'
import { generateUID } from '../utils/helpers'

const NewCommentForm = (props) => {
    const { handleNewComment, parentId, hideForm = null, editAuthor, editBody, id } = props
    //local state for form to add new comment
    const [author, setAuthor] = useState(editAuthor !== undefined ? editAuthor : '')
    const [body, setBody] = useState(editBody !== undefined ? editBody : '')

    const handleSubmit = (evt) => {
        evt.preventDefault()

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

            if(hideForm !== null) {
                hideForm()
            }
        })
    }

    return(
        <form className='comment-form' onSubmit={handleSubmit}>
            <input
                value={author}
                onChange={(evt) => setAuthor(evt.target.value)}
                className='form-input'
                placeholder='Enter author name'
            />
            <textarea
                value={body}
                onChange={(evt) => setBody(evt.target.value)}
                className='form-input'
                placeholder='Enter comment body'
            />
            <button
                type='submit'
                disabled={ author === '' || body === '' }
            >
                Submit
            </button>
        </form>
    )
}

export default connect(null, { handleNewComment })(NewCommentForm)