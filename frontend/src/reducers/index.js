import { combineReducers } from 'redux'
import categories from './categories'
import comments from './comments'
import posts from './posts'

//combines all the reducers into one for the store object, creating the store state 
export default combineReducers({
    categories,
    comments,
    posts
})