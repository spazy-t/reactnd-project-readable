import { RECEIVE_CATEGORIES } from '../constants'

export const receiveCategories = (categories) => {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}