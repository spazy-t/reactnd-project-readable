import { getCategories, getPosts, getComments } from '../utils/helpers'
import { receiveCategories } from './categories'
import { receivePosts } from './posts'
import { receiveComments } from './comments'

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

            dispatch(getCurrentComments(postsObj))
        })
        .catch(err => {
            console.log('error retrieving data from server', err)
        })
    }
}

const getCurrentComments = (posts) => {
    return(dispatch) => {
        Object.keys(posts).forEach(post => {
            getComments(post)
            .then(data => {
                dispatch(receiveComments(data))
            })
        })
    }
}