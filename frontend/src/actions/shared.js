import { getCategories, getPosts } from '../utils/helpers'
import { receiveCategories } from './categories'
import { receivePosts } from './posts'

/**
 * thunk action to grab init data from server (posts and categories)
 */
//TODO: alter receieved posts so the key is the id as per: https://knowledge.udacity.com/questions/166863 and fix occuring references
export const handleInitData = () => {
    return(dispatch) => {
        Promise.all([getCategories(), getPosts()])
        .then(([cats, posts]) => {
            dispatch(receiveCategories(cats.categories))
            dispatch(receivePosts(posts))
        })
        .catch(err => {
            console.log('error retrieving data from server', err)
        })
    }
}