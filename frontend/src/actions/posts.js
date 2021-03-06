import {
    RECEIVE_POSTS,
    POST_VOTE_UP,
    POST_VOTE_DOWN,
    ADD_NEW_POST,
    DELETE_POST,
    COMMENT_COUNT_UP,
    COMMENT_COUNT_DOWN
} from '../constants'
import {
    postPostVote,
    addNewPost,
    editPost,
    deletePost
} from '../utils/helpers'

//Thunk and regular actions dealing with reltrieval, deletion, addition, number of comments, and voting for posts

/**
 * thunk actions
 */
export const handlePostVote = (id, voteType) => {
    return (dispatch) => {
        postPostVote(id, { option: voteType })
        .then(
            voteType === 'upVote'
                ? dispatch(postVoteUp(id))
                : dispatch(postVoteDown(id))
        )
        .catch(err => {
            console.log('error saving post vote', err)
        })
    }
}

//adds new post to category in server then store state, or edits a post depending on boolean passed in from addPost
export const handleNewPost = (newPost, edit = false) => {
    return (dispatch) => {
        return (!edit ? addNewPost(newPost) : editPost(newPost))
        .then((data) => {
            dispatch(newCatPost(data))
        })
        .catch(err => {
            console.log('error adding new post', err)
        })
    }
}

export const handlePostDelete = (postId) => {
    return (dispatch) => {
        deletePost(postId)
        .then(
            dispatch(postDelete(postId))
        )
        .catch(err => console.log('error deleting post', err))
    }
}

/**
 * regular actions
 */
export const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export const postCommentUp = (postId) => {
    return {
        type: COMMENT_COUNT_UP,
        postId
    }
}

export const postCommentDown = (postId) => {
    return {
        type: COMMENT_COUNT_DOWN,
        postId
    }
}

const postVoteUp = (postId) => {
    return {
        type: POST_VOTE_UP,
        postId
    }
}

const postVoteDown = (postId) => {
    return {
        type: POST_VOTE_DOWN,
        postId
    }
}

const newCatPost = (newPost) => {
    return {
        type: ADD_NEW_POST,
        newPost
    }
}

const postDelete = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}