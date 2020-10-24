import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { handleNewPost } from '../actions/posts'
import { useParams } from 'react-router-dom'
import { generateUID } from '../utils/helpers'
import {
    FormContainer,
    FormInput,
    NewEntryForm
} from '../styles/main'

const AddPost = (props) => {
    //reads the url parameter to know which category to place a new post into
    const { category, post_id } = useParams()
    const { editTitle, editAuthor, editBody, handleNewPost, history } = props

    //local state for the form
    const [postValues, setValues] = useState({
        title: '',
        author: '',
        body: ''
    })

    //https://reacttraining.com/blog/when-to-use-functions-in-hooks-dependency-array/ (24/10/2020)
    //hook to update form fields if url is refreshed or navigated to edit post, then fire when post data is loaded and set local satet with data.
    useEffect(() => {
        setValues({
            title: editTitle,
            author: editAuthor,
            body: editBody
        })
    }, [editTitle, editAuthor, editBody])

    const handleSubmit = (evt) => {
        evt.preventDefault()

        //if the user is editing a post a post_id will be sent in url params, therefore use this instaed of generating an id
        //also passes boolean to determine if its editing a current post or adding a new one
        handleNewPost({
            id: post_id === undefined ? generateUID() : post_id,
            timestamp: Date.now(),
            title: postValues.title,
            body: postValues.body,
            author: postValues.author,
            category: category
        }, post_id !== undefined)
        .then(() => {
            setValues({
                title: '',
                author: '',
                body: ''
            })
            history.goBack()
        })
    }

    //https://stackoverflow.com/questions/59813926/usestate-to-update-multiple-values-in-react (24/10/2020)
    return(
        <FormContainer>
            <NewEntryForm onSubmit={ handleSubmit }>
                <FormInput
                    type='text'
                    className='form-input'
                    value={ postValues.title }
                    name='title'
                    placeholder='Enter Title'
                    onChange={ (evt) => setValues({ ...postValues, [evt.target.name]: evt.target.value }) }
                 />
                <FormInput
                    type='text'
                    className='form-input'
                    value={ postValues.author }
                    name='author'
                    placeholder='Enter Author name'
                    onChange={ (evt) => setValues({ ...postValues, [evt.target.name]: evt.target.value }) }
                />
                <textarea
                    type='text'
                    className='form-input'
                    value={ postValues.body }
                    name='body'
                    placeholder='Enter body of post'
                    onChange={ (evt) => setValues({ ...postValues, [evt.target.name]: evt.target.value }) }
                />
                <button
                    type='submit'
                    disabled={ postValues.title === '' || postValues.author === '' || postValues.body === '' }
                >
                    SUBMIT
                </button>
            </NewEntryForm>
        </FormContainer>
    )
}

//map post body, title, and author from state if post is being edited
function mapStateToProps({ posts }, route) {
    const { post_id } = route.match.params

    return {
        editTitle: posts[post_id] === undefined ? '' : posts[post_id].title,
        editAuthor: posts[post_id] === undefined ? '' : posts[post_id].author,
        editBody: posts[post_id] === undefined ? '' : posts[post_id].body
    }
}

export default connect(mapStateToProps, { handleNewPost })(AddPost)