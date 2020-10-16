import { RECEIVE_COMMENTS, COMMENT_VOTE_UP, COMMENT_VOTE_DOWN } from '../constants'
import { postCommentVote } from '../utils/helpers'
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

/**
 * regular actions
 */
export const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

export const commentVoteUp = (commentId) => {
    return {
        type: COMMENT_VOTE_UP,
        commentId
    }
}

export const commentVoteDown = (commentId) => {
    return {
        type: COMMENT_VOTE_DOWN,
        commentId
    }
}