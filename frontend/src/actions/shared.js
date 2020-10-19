import { getCategories, getPosts, getComments, addNewComment, editComment, deleteComment } from '../utils/helpers'
import { receiveCategories } from './categories'
import { receivePosts, postCommentUp, postCommentDown } from './posts'
import { receiveComments, addComment, commentDelete } from './comments'

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

//depending on edit boolean the helper method for either the add new comment or edit existing comment is called,
//also increases the post comment count on success
export const handleNewComment = (newComment, edit = false) => {
    return(dispatch) => {
        return (!edit ? addNewComment(newComment) : editComment(newComment))
        .then((data) => {
            dispatch(addComment(data))
            dispatch(postCommentUp(data.parentId))
        })
        .catch(err => console.log('error saving new comment', err))
    }
}

//delete comment from server then store if successful, also reduces post comment count by 1
export const handleDeleteComment = (commentId, postId) => {
    return (dispatch) => {
        deleteComment(commentId)
        .then(() => {
            dispatch(commentDelete(commentId))
            dispatch(postCommentDown(postId))
        })
        .catch(err => console.log('error deleting comment', err))
    }
}

const getCurrentComments = (posts) => {
    return(dispatch) => {
        Object.keys(posts).forEach(post => {
            getComments(post)
            .then(data => {
                const commentObj = {}
                data.forEach(comment => {commentObj[comment.id] = comment})
                
                dispatch(receiveComments(commentObj))
            })
        })
    }
}