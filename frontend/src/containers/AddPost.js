import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleNewPost } from '../actions/posts'
import { useParams } from 'react-router-dom'
import { generateUID } from '../utils/helpers'

const AddPost = (props) => {
    //reads the url parameter to know which category to place a new post into
    //TODO: validate url param to be one of the categories or 404 them!
    const { category, post_id } = useParams()
    const { editTitle, editAuthor, editBody, handleNewPost, history } = props

    //local state for the form
    //if editing a current post populate local state with current post data
    const [title, setTitle] = useState(editTitle !== undefined ? editTitle : '')
    const [author, setAuthor] = useState(editAuthor !== undefined ? editAuthor : '')
    const [body, setBody] = useState(editBody !== undefined ? editBody : '')

    const handleSubmit = (evt) => {
        evt.preventDefault()

        //if the user is editing a post a post_id will be sent in url params, therefore use this instaed of generating an id
        //also passes boolean to determine if its editing a current post or adding a new one
        handleNewPost({
            id: post_id === undefined ? generateUID() : post_id,
            timestamp: Date.now(),
            title,
            body,
            author,
            category: category
        }, post_id !== undefined)
        .then(() => {
            setTitle('')
            setAuthor('')
            setBody('')
            history.goBack()
        })
    }

    return(
        <div className='form-container'>
            <form className='new-entry-form' onSubmit={ handleSubmit }>
                <input
                    type='text'
                    className='form-input'
                    value={title}
                    name='title'
                    placeholder='Enter Title'
                    onChange={(evt) => setTitle(evt.target.value)}
                 />
                <input
                    type='text'
                    className='form-input'
                    value={author}
                    name='author'
                    placeholder='Enter Author name'
                    onChange={(evt) => setAuthor(evt.target.value)}
                />
                <textarea
                    type='text'
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

//map post body, title, and author from state if post is being edited
function mapStateToProps({ posts }, route) {
    if (route.match.params.post_id !== undefined) {
        const { post_id } = route.match.params

        return {
            editTitle: posts[post_id].title,
            editAuthor: posts[post_id].author,
            editBody: posts[post_id].body
        }
    } else {
        return {}
    }
}

export default connect(mapStateToProps, { handleNewPost })(AddPost)