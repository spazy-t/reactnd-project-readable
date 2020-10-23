import {
    RECEIVE_COMMENTS,
    COMMENT_VOTE_UP,
    COMMENT_VOTE_DOWN,
    ADD_NEW_COMMENT,
    DELETE_COMMENT
} from '../constants'

//put comments into store state, set comment vote number, add a new comment to state, delete a comment from state
const comments = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_COMMENTS:
            return {
                ...state,
                ...action.comments
            }
        case COMMENT_VOTE_UP:
            return {
                ...state,
                [action.commentId]: {
                    ...state[action.commentId],
                    voteScore: state[action.commentId].voteScore + 1
                }
            }
        case COMMENT_VOTE_DOWN:
            return {
                ...state,
                [action.commentId]: {
                    ...state[action.commentId],
                    voteScore: state[action.commentId].voteScore - 1
                }
            }
        case ADD_NEW_COMMENT:
            return {
                ...state,
                [action.comment.id]: {
                    ...action.comment
                }
            }
        case DELETE_COMMENT:
            let currentComments = { ...state }
            delete currentComments[action.commentId]

            return currentComments
        default:
            return state
    }
}

export default comments