import { RECEIVE_CATEGORIES } from '../constants'

//regular action for retrieval or categories from db
export const receiveCategories = (categories) => {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}