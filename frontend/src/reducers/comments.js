import { RECEIVE_COMMENTS, COMMENT_VOTE_UP, COMMENT_VOTE_DOWN } from '../constants'

//TODO: refactor as comments are only sent in when looking at a post detail screen, so need to be put into a postId obj/array?
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
        default:
            return state
    }
}

export default comments