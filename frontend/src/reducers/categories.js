import { RECEIVE_CATEGORIES } from '../constants'

//stores categories passed in from db to redux state
const categories = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                ...action.categories
            }
        default:
            return state
    }
}

export default categories