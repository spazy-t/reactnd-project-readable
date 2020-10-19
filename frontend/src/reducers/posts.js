import {
    RECEIVE_POSTS,
    POST_VOTE_UP,
    POST_VOTE_DOWN,
    ADD_NEW_POST,
    DELETE_POST,
    COMMENT_COUNT_UP,
    COMMENT_COUNT_DOWN
} from '../constants'

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
        case DELETE_POST:
            let currentPosts = { ...state }
            delete currentPosts[action.postId]

            return currentPosts
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
        case COMMENT_COUNT_UP:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    commentCount: state[action.postId].commentCount + 1
                }
            }
        case COMMENT_COUNT_DOWN:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    commentCount: state[action.postId].commentCount - 1
                }
            }
        default:
            return state
    }
}

export default posts