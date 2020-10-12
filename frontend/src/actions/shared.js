import { getCategories, getPosts } from '../utils/helpers'
import { receiveCategories } from './categories'
import { receivePosts } from './posts'

/**
 * thunk action to grab init data from server (posts and categories)
 */
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