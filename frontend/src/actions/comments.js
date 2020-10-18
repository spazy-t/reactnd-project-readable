import { RECEIVE_COMMENTS, COMMENT_VOTE_UP, COMMENT_VOTE_DOWN, ADD_NEW_COMMENT } from '../constants'
import { postCommentVote, addNewComment, editComment } from '../utils/helpers'

/**
 * thunk actions
 */
//TODO: optomistic updating, look up in previous project
export const handleCommentVote = (commentId, voteType) => {
    return(dispatch) => {
        postCommentVote(commentId, {option: voteType})
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

//depending on edit boolean the hlper method for either the add new cooment or edit existing comment is called
export const handleNewComment = (newComment, edit = false) => {
    return(dispatch) => {
        return (!edit ? addNewComment(newComment) : editComment(newComment))
        .then((data) => {
            dispatch(addComment(data))
        })
        .catch(err => console.log('error saving new comment', err))
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

const addComment = (comment) => {
    return {
        type: ADD_NEW_COMMENT,
        comment
    }
}