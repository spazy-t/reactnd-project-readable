import { RECEIVE_POSTS, POST_VOTE_UP, POST_VOTE_DOWN } from '../constants'
import { postPostVote } from '../utils/helpers'

/**
 * thunk actions
 */
//TODO: when shared action key id sorted take out hardcoded id here too
//TODO: set up if voteDown also
//TODO: optomistic updating, look up in previous project
export const handlePostVote = (id, voteType) => {
    return(dispatch) => {
        postPostVote(id, {option: voteType})
        .then(
            dispatch(postVoteUp(0))
        )
        .catch(err => {
            console.log('error saving post vote', err)
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
export const postVoteUp = (postId) => {
    return {
        type: POST_VOTE_UP,
        postId
    }
}

export const postVoteDown = (postId) => {
    return {
        type: POST_VOTE_DOWN,
        postId
    }
}