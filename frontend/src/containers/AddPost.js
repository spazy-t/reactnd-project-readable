import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleNewPost } from '../actions/posts'
import { useParams } from 'react-router-dom'
import { generateUID } from '../utils/helpers'

const AddPost = ({ handleNewPost, history }) => {
    //reads the url parameter to know which category to place a new post into
    //TODO: validate url param to be one of the categories or 404 them!
    const { category } = useParams()

    //local state for the form
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()

        handleNewPost({
            id: generateUID(),
            timestamp: Date.now(),
            title,
            body,
            author,
            category: category
        })
        .then(() => {
            setTitle('')
            setAuthor('')
            setBody('')
            history.push('/')
        })
    }

    return(
        <div className='form-container'>
            <form className='new-entry-form' onSubmit={handleSubmit}>
                <input
                    className='form-input'
                    value={title}
                    name='title'
                    placeholder='Enter Title'
                    onChange={(evt) => setTitle(evt.target.value)}
                 />
                <input
                    className='form-input'
                    value={author}
                    name='author'
                    placeholder='Enter Author name'
                    onChange={(evt) => setAuthor(evt.target.value)}
                />
                <textarea
                    className='form-input'
                    value={body}
                    name='body'
                    placeholder='Enter body of post'
                    onChange={(evt) => setBody(evt.target.value)}
                />
                <button
                    type='submit'
                    disabled={ title === '' || author === '' || body === '' }
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default connect(null, { handleNewPost })(AddPost)