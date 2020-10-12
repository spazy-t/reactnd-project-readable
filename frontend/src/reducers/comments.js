import { RECEIVE_COMMENTS } from '../constants'

//TODO: refactor as comments are only sent in when looking at a post detail screen, so need to be put into a postId obj/array?
const comments = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_COMMENTS:
            return {
                ...state,
                ...action.comments
            }
        default:
            return state
    }
}

export default comments