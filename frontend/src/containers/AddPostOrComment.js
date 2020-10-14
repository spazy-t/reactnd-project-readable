import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleNewPost } from '../actions/posts'
import { useParams } from 'react-router-dom'

const AddPostOrComment = ({ handleNewPost, history }) => {
    //reads the url parameter to know which category to place a new post into
    //TODO: validate url param to be one of the categories or 404 them!
    const { cat_id } = useParams()

    //local state for the form
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        //TODO: create UUID

        handleNewPost({
            id: 'testysfasdfas',
            timestamp: Date.now(),
            title,
            body,
            author,
            category: cat_id
        })
        .then(() => {
            setTitle('')
            setAuthor('')
            setBody('')
            history.push('/')
        })
    }

    //TODO: disable submit if no content in any text field
    return(
        <div className='form-container'>
            <form className='new-entry-form' onSubmit={handleSubmit}>
                <textarea
                    value={title}
                    name='title'
                    placeholder='Enter Title'
                    onChange={(evt) => setTitle(evt.target.value)}
                 />
                <textarea
                    value={author}
                    name='author'
                    placeholder='Enter Author name'
                    onChange={(evt) => setAuthor(evt.target.value)}
                />
                <textarea
                    value={body}
                    name='body'
                    placeholder='Enter body of post'
                    onChange={(evt) => setBody(evt.target.value)}
                />
                <button
                    type='submit'
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default connect(null, { handleNewPost })(AddPostOrComment)