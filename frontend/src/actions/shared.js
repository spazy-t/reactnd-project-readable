import { getCategories, getPosts } from '../utils/helpers'
import { receiveCategories } from './categories'
import { receivePosts } from './posts'

/**
 * thunk action to grab init data from server (posts and categories)
 */
//key is the id as per: https://knowledge.udacity.com/questions/166863
export const handleInitData = () => {
    return(dispatch) => {
        Promise.all([getCategories(), getPosts()])
        .then(([cats, posts]) => {
            //replaces array index key with obj id as key
            const postsObj = {}
            posts.forEach(post => {postsObj[post.id] = post})

            dispatch(receiveCategories(cats.categories))
            dispatch(receivePosts(postsObj))
        })
        .catch(err => {
            console.log('error retrieving data from server', err)
        })
    }
}