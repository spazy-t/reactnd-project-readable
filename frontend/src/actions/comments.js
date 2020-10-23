import {
    RECEIVE_COMMENTS,
    COMMENT_VOTE_UP,
    COMMENT_VOTE_DOWN,
    ADD_NEW_COMMENT,
    DELETE_COMMENT
} from '../constants'
import { postCommentVote } from '../utils/helpers'

//Thunk and regular actions dealing with reltrieval, deletion, addition and voting for comments

/**
 * thunk actions
 */
//TODO: optomistic updating, look up in previous project
export const handleCommentVote = (commentId, voteType) => {
    return (dispatch) => {
        postCommentVote(commentId, { option: voteType })
        .then(
            voteType === 'upVote'
                ? dispatch(commentVoteUp(commentId))
                : dispatch(commentVoteDown(commentId))
        )
        .catch(err => {
            console.log('error saving post vote', err)
        })
    }
}

/**
 * regular actions
 */
export const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

export const addComment = (comment) => {
    return {
        type: ADD_NEW_COMMENT,
        comment
    }
}

export const commentDelete = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

const commentVoteUp = (commentId) => {
    return {
        type: COMMENT_VOTE_UP,
        commentId
    }
}

const commentVoteDown = (commentId) => {
    return {
        type: COMMENT_VOTE_DOWN,
        commentId
    }
}