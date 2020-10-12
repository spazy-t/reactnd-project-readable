import { RECEIVE_COMMENTS } from '../constants'

export const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}