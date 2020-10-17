import { RECEIVE_POSTS, POST_VOTE_UP, POST_VOTE_DOWN, ADD_NEW_POST } from '../constants'
import { postPostVote, addNewPost, editPost } from '../utils/helpers'

/**
 * thunk actions
 */
//TODO: optomistic updating, look up in previous project
export const handlePostVote = (id, voteType) => {
    return(dispatch) => {
        postPostVote(id, {option: voteType})
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
    return(dispatch) => {
        return (!edit ? addNewPost(newPost) : editPost(newPost))
        .then((data) => {
            dispatch(newCatPost(data))
        })
        .catch(err => {
            console.log('error adding new post', err)
        })
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

//TODO: maybe condense both votes into one, and pass through new number from component?
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