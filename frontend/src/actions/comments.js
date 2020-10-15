import { RECEIVE_COMMENTS } from '../constants'

/**
 * regular actions
 */
export const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}