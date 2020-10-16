import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleNewComment } from '../actions/comments'
import { generateUID } from '../utils/helpers'

const NewCommentForm = ({ handleNewComment, parentId }) => {
    //local state for form to add new comment
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()

        handleNewComment({
            id: generateUID(),
            timestamp: Date.now(),
            body,
            author,
            parentId
        })
        .then(() => {
            setAuthor('')
            setBody('')
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