import { RECEIVE_POSTS } from '../constants'

export const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}