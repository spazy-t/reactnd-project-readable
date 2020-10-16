import { RECEIVE_POSTS, POST_VOTE_UP, POST_VOTE_DOWN, ADD_NEW_POST } from '../constants'

const posts = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case ADD_NEW_POST:
            return {
                ...state,
                [action.newPost.id]: {
                    ...action.newPost
                }
            }
        case POST_VOTE_UP:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    voteScore: state[action.postId].voteScore + 1
                }
            }
        case POST_VOTE_DOWN:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    voteScore: state[action.postId].voteScore - 1
                }
            }
        default:
            return state
    }
}

export default posts